import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";

function App() {
  const [todoList, setTodoList] = useState(initialTodo);

  const initialTodo = {
    id: uuidv4(),
    title: "test",
    context: "test",
    isDone: false,
  };

  return (
    <div>
      <Header> TodoList Header </Header>
      <InputForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
