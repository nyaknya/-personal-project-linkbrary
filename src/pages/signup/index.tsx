import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import styles from "@/styles/signpage.module.scss";

const cn = classNames.bind(styles);

export default function signup() {
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
            이미 회원이신가요? <Link href="/signin.html">로그인 하기</Link>
          </p>
        </div>
      </header>
      <main>
        <div className="container">
          <form>
            <div className={cn("form-item", "email-arae")}>
              <label htmlFor="email">이메일</label>
              <Input id="email" type="email" />
            </div>
            <div className={cn("form-item", "password-area")}>
              <label htmlFor="password">비밀번호</label>
              <Input id="password" type="password" />
            </div>
            <div className={cn("form-item", "password-confirm-area")}>
              <label htmlFor="passwordConfirm">비밀번호 확인</label>
              <Input id="passwordConfirm" type="password" />
            </div>
            <div className={cn("button-area")}>
              <Button>회원가입</Button>
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
