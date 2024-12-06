import apiRequest from "./apiRequest";

interface SignInFormInputs {
  email: string;
  password: string;
}

interface SignInResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export const submitSignIn = async (
  data: SignInFormInputs,
  onSuccess: () => void,
  onFailure: (error: Error) => void
) => {
  try {
    const response = await apiRequest<SignInResponse>({
      endpoint: "/api/sign-in",
      method: "POST",
      body: data,
    });

    if (response?.data?.accessToken) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      onSuccess();
    } else {
      onFailure(new Error("Invalid response from the server."));
    }
  } catch (error) {
    onFailure(error as Error);
  }
};
