import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import { useRedirectIfAuthenticated } from "@/hooks/useRedirectIfAuthenticated";
import styles from "@/styles/signpage.module.scss";
import { checkEmailDuplication } from "@/utils/checkEmailDuplication";
import { submitSignUp } from "@/utils/submitSign";

const cn = classNames.bind(styles);

interface SignUpFormInputs {
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function Signup() {
  useRedirectIfAuthenticated();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    trigger,
    setError,
    watch,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const handleBlur = async (field: keyof SignUpFormInputs) => {
    const isValid = await trigger(field);

    if (field === "email" && isValid) {
      const email = watch("email");
      await checkEmailDuplication(email, setError);
    }
  };

  const password = watch("password");

  const onSubmit = async (data: SignUpFormInputs) => {
    await submitSignUp(
      data,
      () => {
        alert("회원가입 성공!");
        router.push("/folder");
      },
      (error) => {
        console.error("회원가입 실패:", error);
        alert("회원가입 중 문제가 발생했습니다. 다시 시도해주세요.");
      }
    );
  };

  const onError = async () => {
    await trigger();
  };

  return (
    <div className={cn("sign-page", "sign-up-page")}>
      <header className={cn("sign-header")}>
        <div className={cn("image-area")}>
          <Link href="/">
            <Image src="/images/logo.svg" alt="로고" width={210} height={38} />
          </Link>
        </div>
        <div className={cn("text-area")}>
          <p>
            이미 회원이신가요? <Link href="/signin">로그인 하기</Link>
          </p>
        </div>
      </header>
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
                onBlur={() => handleBlur("email")}
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
                onBlur={() => handleBlur("password")}
              />
            </div>
            <div className={cn("form-item", "password-confirm-area")}>
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
                onBlur={() => handleBlur("passwordConfirm")}
              />
            </div>
            <div className={cn("button-area")}>
              <Button type="submit">회원가입</Button>
            </div>
          </form>
          <div className={cn("sns-login")}>
            <span>다른 방식으로 가입하기</span>
            <div className={cn("image-area")}>
              <Link href="https://www.google.com/">
                <Image
                  src="/images/sns_google.png"
                  alt="구글 아이콘"
                  width={44}
                  height={44}
                />
              </Link>
              <Link href="https://www.kakaocorp.com/page/">
                <Image
                  src="/images/sns_cacao.png"
                  alt="카카오 아이콘"
                  width={44}
                  height={44}
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
