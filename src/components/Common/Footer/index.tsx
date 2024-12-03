import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.scss";

const cn = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cn("footer")}>
      <div className={cn("footer-container")}>
        <div className={cn("copyright")}>
          <span>©codeit - 2023</span>
        </div>
        <nav className={cn("footer-nav")}>
          <Link href="/privacy">
            <span>Privacy Policy</span>
          </Link>
          <Link href="/faq">
            <span>FAQ</span>
          </Link>
        </nav>
        <div className={cn("sns-link")}>
          <ul>
            <li>
              <Link href="https://www.facebook.com/" target="blank">
                <Image
                  src="/images/facebook.svg"
                  alt="페이스북"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
            <li>
              <Link href="https://x.com/" target="blank">
                <Image
                  src="/images/twitter.svg"
                  alt="트위터"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/" target="blank">
                <Image
                  src="/images/youtube.svg"
                  alt="유튜브"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/" target="blank">
                <Image
                  src="/images/instagram.svg"
                  alt="인스타"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
