import express from "express";

// 라우터가 생성됌
export const todosRoute = express.Router();

//response에 제이슨 데이터 넘겨주고있음
todosRoute.get("/", (req, res) => {
  res.json({ routesssss: "get쩔엉" });
});

//작업즁
todosRoute.post("/", (req, res) => {
  //body : request의 속성임
  console.log("req.body.name:", req.body.name);
  res.json({ routesssss: "post쩔엉~~~" });
});
