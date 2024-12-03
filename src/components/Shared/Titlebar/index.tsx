import classNames from "classnames/bind";
import Image from "next/image";

import styles from "./Titlebar.module.scss";

const cn = classNames.bind(styles);

interface TitlebarProps {
  userImage: string;
  userName: string;
  folderName: string;
}

export default function Titlebar({
  userImage,
  userName,
  folderName,
}: TitlebarProps) {
  return (
    <div className={cn("title-bar")}>
      <div className={cn("image-box")}>
        <Image src={userImage} alt="프로필 이미지" width={60} height={60} />
        <span>{userName}</span>
      </div>
      <h2>{folderName}</h2>
    </div>
  );
}
