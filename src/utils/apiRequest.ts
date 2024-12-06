import axios, { AxiosRequestConfig, isAxiosError } from "axios";

interface ApiRequestProps<T = unknown> {
  endpoint: string;
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: T;
}

interface ErrorResponse {
  message?: string;
}

export default async function apiRequest<TResponse>({
  endpoint,
  method = "GET",
  body,
}: ApiRequestProps): Promise<TResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("Base URL이 설정되지 않았습니다.");
  }

  const config: AxiosRequestConfig = {
    url: `${baseUrl}${endpoint}`,
    method,
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  };

  try {
    const response = await axios<TResponse>(config);
    return response.data;
  } catch (error) {
    if (isAxiosError<ErrorResponse>(error)) {
      const errorMessage = error.response?.data?.message || "알 수 없는 오류";
      throw new Error(
        `API 요청 실패: ${
          error.response?.status || "알 수 없음"
        }, 메시지: ${errorMessage}`
      );
    }
    throw new Error("네트워크 또는 클라이언트 오류 발생");
  }
}
