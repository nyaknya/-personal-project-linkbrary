import apiRequest from "@/utils/apiRequest";

export const checkEmailDuplication = async (
  email: string,
  setError: (name: "email", error: { type: string; message: string }) => void
): Promise<boolean> => {
  try {
    await apiRequest({
      endpoint: "/api/check-email",
      method: "POST",
      body: { email },
    });
    return true;
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "message" in error &&
      typeof (error as { message: unknown }).message === "string"
    ) {
      const errorMessage = (error as { message: string }).message;
      setError("email", {
        type: "custom",
        message: errorMessage || "이미 존재하는 이메일입니다.",
      });
    } else {
      console.error("Unexpected error:", error);
      setError("email", {
        type: "custom",
        message: "이메일 확인 중 문제가 발생했습니다.",
      });
    }
    return false;
  }
};
