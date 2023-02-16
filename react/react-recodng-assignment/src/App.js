import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const initialTodoList = [
    {
      title: "test",
      content: "testContent",
      isDone: false,
      id: uuidv4(),
    },
  ];

  const [todoList, setTodoList] = useState(initialTodoList);

  return (
    <div>
      <InputForm setTodoList={setTodoList} />
      <TodoList todoList={todoList} isActive={true} />
      <TodoList todoList={todoList} isActive={false} />
    </div>
  );
}

export default App;
