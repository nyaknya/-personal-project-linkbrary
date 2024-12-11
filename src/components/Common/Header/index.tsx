import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/router";

import { UserProfileData } from "@/types";
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
  const router = useRouter();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  const { data: userProfile, status } = useQuery<UserProfileData[] | null>({
    queryKey: ["userProfile"],
    queryFn: async () => {
      if (!token) {
        return null;
      }
      return await apiRequest<UserProfileData[]>({ endpoint: "/users" });
    },
    enabled: !!token,
  });

  if (status === "pending") {
    return <Loading />;
  }

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
