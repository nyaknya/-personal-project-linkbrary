import { useMutation } from "@tanstack/react-query";

import apiRequest from "@/utils/apiRequest";

interface SignUpFormInputs {
  email: string;
  password: string;
}

interface SignUpResponse {
  accessToken: string;
  refreshToken: string;
}

export const useSignUp = () => {
  return useMutation<SignUpResponse, Error, SignUpFormInputs>({
    mutationFn: async (data: SignUpFormInputs): Promise<SignUpResponse> => {
      const { email, password } = data;

      return await apiRequest<SignUpResponse>({
        endpoint: "/auth/sign-up",
        method: "POST",
        body: { email, password },
      });
    },
    onSuccess: (response) => {
      const { accessToken, refreshToken } = response;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    },
    onError: (error) => {
      console.error("회원가입 실패:", error.message);
    },
  });
};
