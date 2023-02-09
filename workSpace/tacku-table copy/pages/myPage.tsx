import Layout from "@/components/layout/Layout";
import React from "react";

// myPage는 SSR로 구현됩니다.

const myPage = () => {
  return (
    <Layout>
      <h2>my페이지입니다</h2>
    </Layout>
  );
};

export default myPage;
