import React, { useState } from "react";
import TextInput from "../components/form/TextInput";
import TodoList from "../components/list/TodoList";
import Layout from "../components/layout/Layout";

const MainPage = () => {
  // 데이터 리스트
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      todoItem: "Test",
      isDone: false,
    },
    {
      id: 2,
      todoItem: "나의 버킷리스트",
      isDone: false,
    },
    {
      id: 3,
      todoItem: "리액트 장인되기!",
      isDone: false,
    },
  ]);

  return (
    <Layout>
      <div>
        <TextInput todoList={todoList} setTodoList={setTodoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </Layout>
  );
};

export default MainPage;

// import React, { useState } from "react";
// import Form from "../components/form/Form";
// import Layout from "../components/layout/Layout";
// import List from "../components/list/List";

// const TodoList = () => {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "리액트 공부하기",
//       body: "리액트 기초를 공부해봅시다.",
//       isDone: false,
//     },
//     {
//       id: 2,
//       title: "리액트 공부하기",
//       body: "리액트 기초를 공부해봅시다.",
//       isDone: true,
//     },
//   ]);

//   return (
//     <Layout>
//         {/* Form : 데이터받는 곳 */}
//       <Form setTodos={setTodos} todos={todos} />
//         {/* 데이터 리스트 */}
//       <List todos={todos} setTodos={setTodos} />
//     </Layout>
//   );
// };

// export default TodoList;
