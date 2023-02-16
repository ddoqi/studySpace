import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  // useEffect(() => {
  //   window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  //   console.log(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  //   // window.Kakao.isInitialized();
  // }, []);

  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
