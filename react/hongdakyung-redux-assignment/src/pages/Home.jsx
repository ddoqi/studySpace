import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import InputForm from "../action/InputForm";
import List from "../action/List";

const Home = () => {
  return (
    <Layout>
      <Header />
      <InputForm />
      <List />
    </Layout>
  );
};

export default Home;
