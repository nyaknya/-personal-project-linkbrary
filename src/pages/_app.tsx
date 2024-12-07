import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ModalContainer from "@/components/Common/Modal/ModalContainer";
import useInitializeUser from "@/hooks/useInitializeUser";
import "../styles/globals.scss";

import type { AppProps } from "next/app";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useInitializeUser();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ModalContainer />
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}
