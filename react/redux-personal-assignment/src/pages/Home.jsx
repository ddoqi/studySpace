import React from "react";
// import Header from "../components/ui/Header";
import Header from "../components/Header";
// /Users/hongdakyung/Desktop/heytest/project/redux-personal-assignment/src/components/Header.jsx
import Layout from "../components/Layout";
// import Form from "../features/todos/components/Form";
// import List from "../features/todos/components/List";
import Form from "../features/Form";
import List from "../features/List";

const Home = () => {
  return (
    <Layout>
      <Header />
      {/*Form : 작성하는 부분 */}
      <h2>Form 부분입니다.----------------------------</h2>
      <Form />
      {/* List : 실제 리스트 */}
      <br />
      <h2>List 부분입니다..----------------------------</h2>
      <List />
    </Layout>
  );
};

export default Home;
