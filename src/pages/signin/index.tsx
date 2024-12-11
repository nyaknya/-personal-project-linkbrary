import classNames from "classnames/bind";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import Button from "@/components/Common/Button";
import SignHeader from "@/components/Common/Header/SignHedaer";
import Input from "@/components/Common/Input";
import { useRedirectIfAuthenticated } from "@/hooks/useRedirectIfAuthenticated";
import { useSignIn } from "@/hooks/useSignIn";
import styles from "@/styles/signpage.module.scss";

const cn = classNames.bind(styles);

interface SignInFormInputs {
  email: string;
  password: string;
}

export default function Signin() {
  useRedirectIfAuthenticated();

  const router = useRouter();
  const { mutate: signIn, status } = useSignIn();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  const onSubmit = async (data: SignInFormInputs) => {
    signIn(data, {
      onSuccess: () => {
        alert("로그인 성공!");
        router.push("/folder");
      },
      onError: (err) => {
        console.error("로그인 실패:", err.message);
        alert(
          err.message || "로그인 중 문제가 발생했습니다. 다시 시도해주세요."
        );
      },
    });
  };

  const onError = async () => {
    await trigger();
    alert("입력값을 확인해주세요.");
  };

  const isLoading = status === "pending";

  return (
    <div className={cn("sign-page", "sign-in-page")}>
      <SignHeader>회원 가입하기</SignHeader>
      <main>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className={cn("form-item", "email-area")}>
              <label htmlFor="email">이메일</label>
              <Input
                id="email"
                type="email"
                placeholder="이메일을 입력해주세요."
                error={errors.email?.message}
                {...register("email", {
                  required: "이메일을 입력해주세요.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: "유효하지 않은 이메일 형식입니다.",
                  },
                })}
                onBlur={() => trigger("email")}
              />
            </div>
            <div className={cn("form-item", "password-area")}>
              <label htmlFor="password">비밀번호</label>
              <Input
                id="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                error={errors.password?.message}
                {...register("password", {
                  required: "비밀번호를 입력해주세요.",
                  pattern: {
                    value: /(?=.*[0-9])(?=.*[A-Za-z])^.{8,}$/,
                    message:
                      "비밀번호는 최소 8자 이상이며, 문자와 숫자를 포함해야 합니다.",
                  },
                })}
                onBlur={() => trigger("password")}
              />
            </div>
            <div className={cn("button-area")}>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "로그인 중..." : "로그인"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
