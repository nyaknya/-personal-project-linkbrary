import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import useOutSideClick from "@/hooks/useOutSideClick";
import { FolderLinksType } from "@/types";
import apiRequest from "@/utils/apiRequest";
import getElapsedTime from "@/utils/getElapsedTime";
import sliceDate from "@/utils/sliceDate";

import styles from "./Card.module.scss";
import CardDropdown from "../CardDropdown";

const cn = classNames.bind(styles);

interface CardProps {
  link: FolderLinksType;
  isOpen: boolean;
  onToggleDropdown: () => void;
}

export default function Card({ link, isOpen, onToggleDropdown }: CardProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isFavorite, setIsFavorite] = useState(link.favorite);
  const [imgSrc, setImgSrc] = useState<string>(
    link.image_source || "/images/defaultimg.png"
  );

  const { url, id, title, description, created_at } = link;
  const postDate = sliceDate(created_at);
  const getTimeAgo = getElapsedTime(created_at);

  const stopEvent = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleImageError = () => {
    setImgSrc("/images/defaultimg.png");
  };

  useOutSideClick({
    ref: dropdownRef,
    callback: onToggleDropdown,
  });

  const toggleFavoriteMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest({
        endpoint: `/links/${id}`,
        method: "PUT",
        body: { favorite: !isFavorite },
      });
    },
    onSuccess: () => {
      setIsFavorite((prev) => !prev);
    },
    onError: (error: AxiosError) => {
      const status = error.response?.status;
      const messages: Record<number, string> = {
        400: "요청 오류: 입력값을 확인해주세요.",
        401: "인증 오류: 다시 로그인해주세요.",
        403: "권한 오류: 이 작업을 수행할 권한이 없습니다.",
      };
      alert(
        status && messages[status]
          ? messages[status]
          : "즐겨찾기 설정 중 오류가 발생했습니다."
      );
    },
  });

  const handleFavoriteClick = (e: React.MouseEvent) => {
    stopEvent(e);
    toggleFavoriteMutation.mutate();
  };

  return (
    <Link href={url} className={cn("card")} target="blank">
      {isOpen && (
        <div ref={dropdownRef}>
          <CardDropdown id={id} url={url} />
        </div>
      )}
      <Image
        src={isFavorite ? "/images/star_filled.svg" : "/images/star.svg"}
        alt="즐겨찾기"
        className={cn("bookmark-icon", { active: isFavorite })}
        width={34}
        height={34}
        onClick={handleFavoriteClick}
      />
      <div className={cn("image-box")}>
        <Image
          src={imgSrc}
          alt={title}
          width={346}
          height={200}
          onError={handleImageError}
        />
      </div>
      <div className={cn("card-content")}>
        <span className={cn("time-stamp")}>
          {getTimeAgo}
          <Image
            src="/images/kebab.svg"
            alt="케밥 버튼"
            onClick={(e) => {
              stopEvent(e);
              onToggleDropdown();
            }}
            width={21}
            height={17}
          />
        </span>
        <p>{description}</p>
        <span className={cn("post-date")}>{postDate}</span>
      </div>
    </Link>
  );
}
