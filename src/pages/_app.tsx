import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useEffect } from "react";

import ModalContainer from "@/components/Common/Modal/ModalContainer";
import "../styles/globals.scss";
import useUserStore from "@/store/useUserStore";
import apiRequest from "@/utils/apiRequest";

import type { AppProps } from "next/app";

const queryClient = new QueryClient();

interface FetchUserResponse {
  id: number;
}

const fetchUser = async (): Promise<FetchUserResponse> => {
  const token = localStorage.getItem("accessToken");
  if (!token) throw new Error("No access token found");

  return await apiRequest<FetchUserResponse>({
    endpoint: "/users",
  });
};

interface InitializeUserProps {
  children: ReactNode;
}

const InitializeUser = ({ children }: InitializeUserProps) => {
  const { setUserId } = useUserStore();
  const queryClient = useQueryClient();

  const { data, error } = useQuery<FetchUserResponse, Error>({
    queryKey: ["user"],
    queryFn: fetchUser,
    retry: false,
  });

  useEffect(() => {
    if (data?.id) {
      setUserId(data.id);
      queryClient.setQueryData(["user"], data);
    }
    if (error) {
      console.error("유저 초기화 실패:", error.message);
    }
  }, [data, error, setUserId, queryClient]);

  return <>{children}</>;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <InitializeUser>
        <Component {...pageProps} />
        <ModalContainer />
      </InitializeUser>
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}
