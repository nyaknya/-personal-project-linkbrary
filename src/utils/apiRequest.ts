interface ApiRequestProps<T = unknown> {
  endpoint: string;
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: T;
}

export default async function apiRequest<TResponse>({
  endpoint,
  method = "GET",
  body,
}: ApiRequestProps): Promise<TResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method !== "GET" && body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${baseUrl}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status}`);
  }

  return response.json();
}
