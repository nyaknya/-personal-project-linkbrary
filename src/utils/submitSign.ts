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

interface SignUpFormInputs {
  email: string;
  password: string;
  passwordConfirm: string;
}

interface SignUpResponse {
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

export const submitSignUp = async (
  data: SignUpFormInputs,
  onSuccess: () => void,
  onFailure: (error: Error) => void
) => {
  try {
    const { email, password } = data;

    const response = await apiRequest<SignUpResponse>({
      endpoint: "/api/sign-up",
      method: "POST",
      body: { email, password },
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
