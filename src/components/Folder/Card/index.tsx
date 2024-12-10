import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import useOutSideClick from "@/hooks/useOutSideClick";
import { FolderLinksType } from "@/types";
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
  const { id, url, image_source, title, description, created_at } = link;

  const [currentSrc, setCurrentSrc] = useState(
    image_source?.trim() || "/images/defaultimg.png"
  );

  const postDate = sliceDate(created_at);
  const getTimeAgo = getElapsedTime(created_at);

  const handleImageError = () => {
    setCurrentSrc("/images/defaultimg.png");
  };

  useOutSideClick({
    ref: dropdownRef,
    callback: () => {
      if (isOpen) onToggleDropdown();
    },
  });

  return (
    <Link href={url} className={cn("card")} target="_blank">
      {isOpen && (
        <div ref={dropdownRef}>
          <CardDropdown id={id} url={url} />
        </div>
      )}
      <Image
        src="/images/star.svg"
        alt="즐겨찾기"
        className={cn("bookmark-icon")}
        width={34}
        height={34}
      />
      <div className={cn("image-box")}>
        <Image
          src={currentSrc}
          alt={title || "Default Image"}
          width={346}
          height={200}
          onError={handleImageError}
          priority
        />
      </div>
      <div className={cn("card-content")}>
        <span className={cn("time-stamp")}>
          {getTimeAgo}
          <Image
            src="/images/kebab.svg"
            alt="케밥 버튼"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
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
