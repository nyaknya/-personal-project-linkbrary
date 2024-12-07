import { useMutation } from "@tanstack/react-query";

import apiRequest from "@/utils/apiRequest";

interface SignInFormInputs {
  email: string;
  password: string;
}

interface SignInResponse {
  accessToken: string;
  refreshToken: string;
}

export const useSignIn = () => {
  return useMutation<SignInResponse, Error, SignInFormInputs>({
    mutationFn: async (data: SignInFormInputs): Promise<SignInResponse> => {
      return await apiRequest<SignInResponse>({
        endpoint: "/auth/sign-in",
        method: "POST",
        body: data,
      });
    },
    onSuccess: (response) => {
      const { accessToken, refreshToken } = response;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    },
    onError: (error) => {
      console.error("로그인 실패:", error.message);
    },
  });
};
