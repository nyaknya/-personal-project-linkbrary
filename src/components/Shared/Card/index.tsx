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
  const { url, imageSource, title, description, createdAt } = link;

  const postDate = sliceDate(createdAt);
  const getTimeAgo = getElapsedTime(createdAt);

  const handleSrc =
    imageSource && imageSource.trim() !== ""
      ? imageSource
      : "/images/defaultimg.png";

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = "/images/defaultimg.png";
  };

  return (
    <a href={url} className={cn("card")} target="blank">
      <div className={cn("image-box")}>
        <Image
          src={handleSrc}
          onError={handleImageError}
          alt={title}
          width={346}
          height={200}
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
