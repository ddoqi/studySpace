import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div style={{ border: "1px solid black", height: 60 }}>
      <Link href="/mainPage">메인페이지||</Link>
      <Link href="/communityPage">커뮤니티||</Link>
      <Link href="/myPage">마이페이지||</Link>
      <Link href="/loginPage">로그인/로그아웃</Link>
    </div>
  );
};

export default Header;
