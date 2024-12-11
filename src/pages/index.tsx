import classNames from "classnames/bind";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Common/Button";
import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import style from "@/styles/main.module.scss";

const cn = classNames.bind(style);

export default function Home() {
  return (
    <>
      <Head>
        <title>linkbrary</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="나만의 링크를 저장해두고 기록하는 사이트"
        />
      </Head>
      <Header />
      <main>
        <section className={cn("visual-container")}>
          <h2>
            <strong>세상의 모든 정보</strong>를 <br />
            쉽게 저장하고 <br className={cn("pc-blind")} /> 관리해 보세요
          </h2>
          <div className={cn("cta-button")}>
            <Link href="/signup.html">
              <Button>링크 추가하기</Button>
            </Link>
          </div>
        </section>
        <section
          className={cn("main-container", "main-section-save", "container")}
        >
          <div className={cn("text-area")}>
            <h2>
              <strong>원하는 링크</strong>를 <br />
              저장하세요
            </h2>
            <p>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상,
              <br />
              사고 싶은 옷, 기억하고 싶은 모든 것을
              <br />한 공간에 저장하세요.
            </p>
          </div>
          <div className={cn("image-area")}>
            <Image
              width={550}
              height={550}
              src="/images/main_img01.png"
              alt="원하는 링크를 저장하세요"
            />
          </div>
        </section>
        <section
          className={cn("main-container", "main-section-manage", "container")}
        >
          <div className={cn("image-area")}>
            <Image
              width={550}
              height={550}
              src="/images/main_img02.png"
              alt="링크를 폴더로 관리하세요"
            />
          </div>
          <div className={cn("text-area")}>
            <h2>
              링크를 폴더로 <br />
              <strong>관리</strong>하세요
            </h2>
            <p>
              나만의 폴더를 무제한으로 만들고
              <br />
              다양하게 활용할 수 있습니다.
            </p>
          </div>
        </section>
        <section
          className={cn("main-container", "main-section-share", "container")}
        >
          <div className={cn("text-area")}>
            <h2>
              저장한 링크를 <br />
              <strong>공유</strong>해 보세요
            </h2>
            <p>
              여러 링크를 폴더에 담고 공유할 수 있습니다.
              <br />
              가족, 친구, 동료들에게 쉽고 빠르게 링크를 <br />
              공유해 보세요.
            </p>
          </div>
          <div className={cn("image-area")}>
            <Image
              width={550}
              height={550}
              src="/images/main_img03.png"
              alt="저장한 링크를 공유해 보세요"
            />
          </div>
        </section>
        <section
          className={cn("main-container", "main-section-search", "container")}
        >
          <div className={cn("image-area")}>
            <Image
              width={550}
              height={550}
              src="/images/main_img04.png"
              alt="저장한 링크를 검색해 보세요"
            />
          </div>
          <div className={cn("text-area")}>
            <h2>
              저장한 링크를 <br />
              <strong>검색</strong>해 보세요
            </h2>
            <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
