import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import styles from "@/styles/signpage.module.scss";

const cn = classNames.bind(styles);

interface SignInFormInputs {
  email: string;
  password: string;
}

export default function Signin() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  const onSubmit = async (data: SignInFormInputs) => {
    // 제출 성공한 경우 처리
    console.log("제출된 데이터:", data);
    alert("로그인 성공!");
  };

  const onError = async () => {
    // 제출 실패 시 모든 필드 유효성 검사
    await trigger();
    console.log("유효하지 않은 필드들:", errors);
  };

  return (
    <div className={cn("sign-page", "sign-in-page")}>
      <header className={cn("sign-header")}>
        <div className={cn("image-area")}>
          <Link href="/">
            <Image src="/images/logo.svg" alt="로고" width={210} height={38} />
          </Link>
        </div>
        <div className={cn("text-area")}>
          <p>
            회원이 아니신가요? <Link href="/signup">회원 가입하기</Link>
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
              <Button type="submit">로그인</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}