import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { UserProfileData } from "@/types";
import apiRequest from "@/utils/apiRequest";

import styles from "./Header.module.scss";
import Button from "../Button";
import UserProfile from "./UserProfile";

const cn = classNames.bind(styles);

interface HeaderProps {
  isSticky?: boolean;
}

export default function Header({ isSticky = true }: HeaderProps) {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setToken(accessToken);
  }, []);

  const { data: userProfile } = useQuery<UserProfileData[] | null>({
    queryKey: ["userProfile"],
    queryFn: async () => {
      return await apiRequest<UserProfileData[]>({ endpoint: "/users" });
    },
    enabled: !!token,
  });

  return (
    <header className={cn(isSticky ? "sticky" : "", "header")}>
      <div className={cn("container")}>
        <Image src="/images/logo.svg" alt="로고" width={133} height={24} />
        {userProfile && userProfile.length > 0 ? (
          <UserProfile
            name={userProfile[0].name}
            email={userProfile[0].email}
            image_source={userProfile[0].image_source}
          />
        ) : (
          <Button onClick={() => router.push("/signin")}>로그인</Button>
        )}
      </div>
    </header>
  );
}
