import Head from "next/head";

import Input from "@/components/Common/Input";

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
      <Input />
    </>
  );
}
