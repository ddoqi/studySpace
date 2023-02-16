import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
