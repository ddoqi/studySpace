import Head from "next/head";
import { Inter } from "@next/font/google";
import LandingPage from "@/components/LandingPage";

const inter = Inter({ subsets: ["latin"] });

// LandingPage는 컴포넌트로 만들었습니다.
// SSG로 만들어야할까요?
export default function Home() {
  return (
    <>
      <LandingPage />
    </>
  );
}
