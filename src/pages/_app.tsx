import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";

import ModalContainer from "@/components/Common/Modal/ModalContainer";
import "../styles/globals.scss";
import useUserStore from "@/store/useUserStore";
import apiRequest from "@/utils/apiRequest";

import type { AppProps } from "next/app";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const { setUserId } = useUserStore();

  useEffect(() => {
    const initializeUser = async () => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        try {
          const response = await apiRequest<{ data: { id: number }[] }>({
            endpoint: "/api/users",
          });

          const userId = response.data?.[0]?.id;
          if (userId) {
            setUserId(userId);
          }
        } catch (error) {
          console.error("유저 초기화 실패:", error);
        }
      }
    };

    initializeUser();
  }, [setUserId]);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ModalContainer />
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}
