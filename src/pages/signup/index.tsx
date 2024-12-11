import classNames from "classnames/bind";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import Button from "@/components/Common/Button";
import SignHeader from "@/components/Common/Header/SignHedaer";
import Input from "@/components/Common/Input";
import { useCheckEmailDuplication } from "@/hooks/useCheckEmailDuplication";
import { useRedirectIfAuthenticated } from "@/hooks/useRedirectIfAuthenticated";
import { useSignUp } from "@/hooks/useSignUp";
import styles from "@/styles/signpage.module.scss";

const cn = classNames.bind(styles);

interface SignUpFormInputs {
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function Signup() {
  useRedirectIfAuthenticated();

  const router = useRouter();
  const { mutate: signUp, status: signUpStatus } = useSignUp();
  const { mutate: checkEmail } = useCheckEmailDuplication();

  const {
    register,
    handleSubmit,
    trigger,
    setError,
    watch,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const handleBlur = async () => {
    const isValid = await trigger("email");
    if (isValid) {
      const email = watch("email");
      checkEmail(email, {
        onError: () => {
          setError("email", {
            type: "custom",
            message: "이미 존재하는 이메일입니다.",
          });
        },
      });
    }
  };

  const password = watch("password");

  const onSubmit = async (data: SignUpFormInputs) => {
    if (data.password !== data.passwordConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    signUp(
      { email: data.email, password: data.password },
      {
        onSuccess: () => {
          alert("회원가입 성공!");
          router.push("/folder");
        },
        onError: (err) => {
          console.error("회원가입 실패:", err.message);
          alert(
            err.message || "회원가입 중 문제가 발생했습니다. 다시 시도해주세요."
          );
        },
      }
    );
  };

  const onError = async () => {
    await trigger();
  };

  return (
    <div className={cn("sign-page")}>
      <SignHeader>로그인 하기</SignHeader>
      <main>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className={cn("form-item")}>
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
                onBlur={handleBlur}
              />
            </div>
            <div className={cn("form-item")}>
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
            <div className={cn("form-item")}>
              <label htmlFor="passwordConfirm">비밀번호 확인</label>
              <Input
                id="passwordConfirm"
                type="password"
                placeholder="비밀번호와 일치하는 값을 입력해주세요."
                error={errors.passwordConfirm?.message}
                {...register("passwordConfirm", {
                  required: "비밀번호 확인을 입력해주세요.",
                  validate: (value) =>
                    value === password || "비밀번호가 일치하지 않습니다.",
                })}
                onBlur={() => trigger("passwordConfirm")}
              />
            </div>
            <div className={cn("button-area")}>
              <Button type="submit" disabled={signUpStatus === "pending"}>
                {signUpStatus === "pending" ? "회원가입 중..." : "회원가입"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
