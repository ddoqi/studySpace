import express from "express";
import { todosRoute } from "./route/todos.js";
const app = express();
const port = 8080;

//라우터를 사용해서 todos로 오는 요청들은 todosRoute로 보내주는 것
app.use(express.json());
app.use("/todos", [todosRoute]);

// '/'로 서버에 요청을해서 response로 받아왔음 아래 json정보를
app.get("/", (req, res) => {
  res.json({ jsonst: "jsonnnnsssss" });
});

// port 8080으로 들어오는 요청을 듣고있음
// 들었으면, 콘솔창 찍히는것
app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
