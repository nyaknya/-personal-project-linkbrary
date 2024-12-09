import classNames from "classnames/bind";
import Image from "next/image";

import styles from "./UserProfile.module.scss";

const cn = classNames.bind(styles);

interface UserProfileProps {
  name: string;
  email: string;
  image_source?: string;
}

export default function UserProfile({
  name,
  email,
  image_source,
}: UserProfileProps) {
  return (
    <div className={cn("user-profile")}>
      <Image
        src={image_source || "/images/profile.svg"}
        alt={name}
        width={28}
        height={28}
      />
      <span>{email}</span>
    </div>
  );
}
