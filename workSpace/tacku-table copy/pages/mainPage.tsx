import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

//MainPage는 SSR로 구현됩니다.
const mainPage = () => {
  const searchAction = () => {
    alert("검색기능");
  };
  return (
    <Layout>
      <div style={{ border: "1px solid black", height: 500 }}>
        <h3>메인페이지입니다</h3>
        <button type="button" onClick={searchAction}>
          검색버튼
        </button>
        <Link href="/writePage">글쓰기 페이지 이동</Link>
      </div>
    </Layout>
  );
};

export default mainPage;
