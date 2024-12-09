import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

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
        <Link href={"/"}>
          <Image
            src={userImage || "/images/profile.svg"}
            alt="프로필 이미지"
            width={60}
            height={60}
          />
        </Link>
        <span>{userName}</span>
      </div>
      <h2>{folderName}</h2>
    </div>
  );
}
