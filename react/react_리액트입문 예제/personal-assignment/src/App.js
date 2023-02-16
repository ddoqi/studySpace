import React, { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
// import todoDone from "./components/todoDone";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      todoItem: "Test",
      isDone: false,
    },
    {
      id: 2,
      todoItem: "나의 버킷리스트",
      isDone: true,
    },
    {
      id: 3,
      todoItem: "리액트 장인되기!",
      isDone: true,
    },
  ]);

  const addItem = () => {
    console.log("addItem 실행, inputValue : ", inputValue);
    const newItem = {
      id: todoList.length + 1,
      todoItem: inputValue,
      isDone: false,
    };
    setTodoList([...todoList, newItem]);
  };

  const deleteItem = (id) => {
    console.log("넘겨받은 아이디:", id);
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  // 상태가 Done일때
  const onEditHandler = (todoId) => {
    const newTodos = todoList.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodoList(newTodos);
  };

  return (
    <div id="whole-body">
      <div id="inputAddBar">
        <br />
        <h2> 🎄 나의 TodoList 🎄 </h2>
        <input
          value={inputValue}
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <br />
        <button onClick={addItem} id="addBtn">
          Add my List!
        </button>

        <h4> * 완료버튼을 누르면 Working에서 사라집니다 * </h4>
      </div>

      <div id="todoListBody">
        <h2>Working</h2>

        <div className="list-wrapper">
          {todoList.map((todo) => {
            if (!todo.isDone) {
              return (
                <TodoItem
                  todoList={todo}
                  deleteItem={deleteItem}
                  onEditHandler={onEditHandler}
                />
              );
            } else {
              return null;
            }
          })}
        </div>

        {/* <div className="list-wrapper">
          {todoList.map((todo) => {
            if (!todo.isDone) {
              return (
                <TodoItem
                  todoList={todo}
                  deleteItem={deleteItem}
                  onEditHandler={onEditHandler}
                />
              );
            } else {
              return null;
            }
          })}
        </div> */}
        {/*  */}
      </div>

      <h2>Done</h2>
      <div className="list-wrapper">
        {todoList.map((a) => {
          return (
            <TodoItem
              todoList={a}
              deleteItem={deleteItem}
              onEditHandler={onEditHandler}
            ></TodoItem>
          );
        })}
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import "./App.css";
// import TodoItem from "./components/TodoItem";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [todoList, setTodoList] = useState([
//     {
//       id: 1,
//       todoItem: "Test",
//     },
//   ]);

//   const addItem = () => {
//     console.log("addItem 실행, inputValue : ", inputValue);
//     const newItem = {
//       id: todoList.length + 1,
//       todoItem: inputValue,
//     };
//     setTodoList([...todoList, newItem]);
//   };

//   const deleteItem = (id) => {
//     console.log("넘겨받은 아이디:", id);
//     const newTodoList = todoList.filter((todo) => todo.id !== id);
//     setTodoList(newTodoList);
//   };

//   return (
//     <div id="whole-body">
//       <div id="inputAddBar">
//         <br />
//         <h2> 🎄 나의 TodoList 🎄 </h2>
//         <input
//           value={inputValue}
//           type="text"
//           onChange={(event) => setInputValue(event.target.value)}
//         />
//         <br />
//         <button onClick={addItem} id="addBtn">
//           Add my List!
//         </button>
//       </div>

//       <div id="todoListBody">
//         {todoList.map((a) => {
//           return <TodoItem todoList={a} deleteItem={deleteItem}></TodoItem>;
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;
