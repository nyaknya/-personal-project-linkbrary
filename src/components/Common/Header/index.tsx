import classNames from "classnames/bind";
import Image from "next/image";
import { useEffect, useState } from "react";

import { UserData, ApiUserListResponse } from "@/types";
import apiRequest from "@/utils/apiRequest";

import styles from "./Header.module.scss";
import Button from "../Button";
import UserProfile from "./UserProfile";
import Loading from "../Loading";

const cn = classNames.bind(styles);

interface HeaderProps {
  isSticky?: boolean;
}

export default function Header({ isSticky = true }: HeaderProps) {
  const [userProfile, setUserProfile] = useState<UserData>();

  const fetchUserData = async () => {
    const data = await apiRequest<ApiUserListResponse>({
      endpoint: "/api/users",
    });
    setUserProfile(data.data[0]);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!userProfile) {
    return <Loading />;
  }

  const { name, email, image_source } = userProfile;

  return (
    <header className={cn(isSticky ? "sticky" : "", "header")}>
      <div className={cn("container")}>
        <Image src="/images/logo.svg" alt="로고" width={133} height={24} />
        {userProfile ? (
          <UserProfile name={name} email={email} ImageSource={image_source} />
        ) : (
          <Button>로그인</Button>
        )}
      </div>
    </header>
  );
}
