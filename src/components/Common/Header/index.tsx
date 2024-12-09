import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";
import Image from "next/image";

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
  const { data: userProfile, status } = useQuery<UserProfileData[]>({
    queryKey: ["userProfile"],
    queryFn: async () => {
      return await apiRequest<UserProfileData[]>({ endpoint: "/users" });
    },
  });

  if (status === "pending") {
    return <Loading />;
  }

  console.log(userProfile);

  return (
    <header className={cn(isSticky ? "sticky" : "", "header")}>
      <div className={cn("container")}>
        <Image src="/images/logo.svg" alt="로고" width={133} height={24} />
        {userProfile ? (
          <UserProfile
            name={userProfile[0].name}
            email={userProfile[0].email}
            image_source={userProfile[0].image_source}
          />
        ) : (
          <Button>로그인</Button>
        )}
      </div>
    </header>
  );
}
