import classNames from "classnames/bind";
import Image from "next/image";

import { LinkDataType } from "@/types";
import getElapsedTime from "@/utils/getElapsedTime";
import sliceDate from "@/utils/sliceDate";

import styles from "./Card.module.scss";

const cn = classNames.bind(styles);

interface CardProps {
  link: LinkDataType;
}

export default function Card({ link }: CardProps) {
  const { url, image_source, title, description, created_at } = link;

  const postDate = sliceDate(created_at);
  const getTimeAgo = getElapsedTime(created_at);

  const imageLoader = ({ src }: { src: string }) => {
    return src && src.trim() !== "" ? src : "/images/defaultimg.png";
  };

  return (
    <a
      href={url}
      className={cn("card")}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={cn("image-box")}>
        <Image
          loader={imageLoader}
          src={image_source || "/images/defaultimg.png"}
          alt={title}
          width={346}
          height={200}
          unoptimized
        />
      </div>
      <div className={cn("card-content")}>
        <span className={cn("time-stamp")}>{getTimeAgo}</span>
        <p>{description}</p>
        <span className={cn("post-date")}>{postDate}</span>
      </div>
    </a>
  );
}
