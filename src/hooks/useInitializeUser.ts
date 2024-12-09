import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import useUserStore from "@/store/useUserStore";
import { fetchUser, FetchUserResponse } from "@/utils/fetchUser";

const useInitializeUser = () => {
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

  return { userId: data?.id, error };
};

export default useInitializeUser;
