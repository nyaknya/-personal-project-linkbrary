import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import styles from "@/styles/signpage.module.scss";

const cn = classNames.bind(styles);

export default function signin() {
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
            회원이 아니신가요? <Link href="/signup.html">회원 가입하기</Link>
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
            <div className={cn("button-area")}>
              <Button>로그인</Button>
            </div>
          </form>
          <div className={cn("sns-login")}>
            <span>소셜 로그인</span>
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
