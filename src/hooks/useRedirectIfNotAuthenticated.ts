import { useRouter } from "next/router";
import { useEffect } from "react";

export const useRedirectIfNotAuthenticated = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/signin");
    }
  }, [router]);
};
