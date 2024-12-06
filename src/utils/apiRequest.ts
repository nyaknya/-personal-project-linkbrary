import apiClient from "./apiClient";

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
  return apiClient
    .request<TResponse>({
      url: endpoint,
      method,
      data: body,
    })
    .then((response) => response.data);
}
