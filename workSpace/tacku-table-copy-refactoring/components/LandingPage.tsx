import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div style={{ border: "1px solid black", height: 500 }}>
      나는 랜딩페이지양
      <br />
      <Link href="/mainPage">메인페이지 이동</Link>
    </div>
  );
};

export default LandingPage;
