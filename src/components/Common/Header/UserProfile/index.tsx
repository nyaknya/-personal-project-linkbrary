import classNames from "classnames/bind";
import Image from "next/image";
import { useState } from "react";

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
  const [imageSrc, setImageSrc] = useState(
    image_source || "/images/profile.svg"
  );

  const handleImageError = () => {
    setImageSrc("/images/profile.svg");
  };

  return (
    <div className={cn("user-profile")}>
      <Image
        src={imageSrc}
        alt={name}
        width={28}
        height={28}
        onError={handleImageError}
      />
      <span>{email}</span>
    </div>
  );
}
