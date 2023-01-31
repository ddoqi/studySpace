import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

// next는 index.html이 없음
// next에 내장된 컴포넌트를 이용해서 접근할 수 있다.
import Head from "next/head";
import { useRouter } from "next/router";

// _app.tsx
// 각각의 페이지가 랜더링될때 가장 먼저 실행되는 파일을 의미
// Component가 넥스트 프로젝트에서 실제로 실행되는 각각의 페이지라고 생각하기
// => __app파일을 이용하면, 공통된 레이아웃 페이지 작성, 글로벌 css 적용도 쉽다는 것
// 각각의 페이지가 렌더링될때 가장먼저 실행되는 파일 => __app.tsx
export default function App({ Component, pageProps }: AppProps) {
  // router를 이용하여 라우터 사용하기
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>테스트입니다.</title>
      </Head>
      <div>
        <h2>Navigation</h2>
        {/* <Link href={`/about`}>About</Link>
        <br />
        <Link href={`/profile/test.json`}>Profile</Link> */}
        <div
          onClick={() => {
            router.push("/about");
          }}
        >
          about
        </div>
        <div
          onClick={() => {
            router.push("/post");
          }}
        >
          post
        </div>
      </div>
      <Component {...pageProps} />
      <h2>footer</h2>
    </div>
  );
}
