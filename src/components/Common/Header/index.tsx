import classNames from "classnames/bind";
import Image from "next/image";
import { useEffect, useState } from "react";

import apiRequest from "@/utils/apiRequest";

import styles from "./Header.module.scss";
import Button from "../Button";
import UserProfile from "./UserProfile";
import Loading from "../Loading";

const cn = classNames.bind(styles);

interface HeaderProps {
  isSticky?: boolean;
}

interface UserProfileData {
  name: string;
  email: string;
  profileImageSource: string;
}

export default function Header({ isSticky = true }: HeaderProps) {
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);

  const fetchUserData = async () => {
    try {
      const data = await apiRequest<UserProfileData>({
        endpoint: "/api/sample/user",
      });
      setUserProfile(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!userProfile) {
    return <Loading />;
  }

  const { name, email, profileImageSource } = userProfile;

  return (
    <header className={cn(isSticky ? "sticky" : "", "header")}>
      <div className={cn("container")}>
        <Image src="/images/logo.svg" alt="로고" width={133} height={24} />
        {userProfile ? (
          <UserProfile
            name={name}
            email={email}
            profileImageSource={profileImageSource}
          />
        ) : (
          <Button>로그인</Button>
        )}
      </div>
    </header>
  );
}
