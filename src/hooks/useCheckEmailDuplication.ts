import { useMutation } from "@tanstack/react-query";

import apiRequest from "@/utils/apiRequest";

interface CheckEmailResponse {
  success: boolean;
}

export const useCheckEmailDuplication = () => {
  return useMutation<CheckEmailResponse, Error, string>({
    mutationFn: async (email: string) => {
      return await apiRequest<CheckEmailResponse>({
        endpoint: "/users/check-email",
        method: "POST",
        body: { email },
      });
    },
    onError: (error) => {
      console.error("이메일 중복 확인 실패:", error.message);
    },
  });
};
