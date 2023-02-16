import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Form from "../features/Form";
import List from "../features/List";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default Home;
