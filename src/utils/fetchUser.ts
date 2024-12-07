import apiRequest from "@/utils/apiRequest";

export interface FetchUserResponse {
  id: number;
}

export const fetchUser = async (): Promise<FetchUserResponse> => {
  const token = localStorage.getItem("accessToken");
  if (!token) throw new Error("No access token found");

  return await apiRequest<FetchUserResponse>({
    endpoint: "/users",
  });
};
