import classNames from "classnames/bind";
import Image from "next/image";

import styles from "./UserProfile.module.scss";

const cn = classNames.bind(styles);

interface UserProfileProps {
  name: string;
  email: string;
  ImageSource: string;
}

export default function UserProfile({
  name,
  email,
  ImageSource,
}: UserProfileProps) {
  return (
    <div className={cn("user-profile")}>
      <Image src={ImageSource} alt={name} width={28} height={28} />
      <span>{email}</span>
    </div>
  );
}
