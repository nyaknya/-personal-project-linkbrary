import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import styles from "@/styles/signpage.module.scss";

const cn = classNames.bind(styles);

interface SignHeaderProps {
  children: ReactNode;
}

export default function SignHeader({ children }: SignHeaderProps) {
  return (
    <header className={cn("sign-header")}>
      <div className={cn("image-area")}>
        <Link href="/">
          <Image src="/images/logo.svg" alt="로고" width={210} height={38} />
        </Link>
      </div>
      <div className={cn("text-area")}>
        <p>
          회원이 아니신가요? <Link href="/signup">{children}</Link>
        </p>
      </div>
    </header>
  );
}
