import React, { useState } from "react";

// todoList={todoList} setTodoList={setTodoList}

let number = 4;
function TextInput({ todoList, setTodoList }) {
  
  const initialNewTodo = {
    id: 0,
    todoItem: "",
    isDone: false,
  };

  const [newTodo, setNewTodo] = useState(initialNewTodo);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    // event.target의 name 뭐지??
    // todoItem이 name
    console.log("event.target의 name?", event.target.name);

    //key : value값으로 넣고 싶을때, (key값이 안정해져있으면)
    // 대괄호를 써서 key네임을 넣는다.
    setNewTodo({ ...newTodo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // 이거 뭐한거임 26번 코드 ???
    // trim
    // 함수 안에서 return의 의미는 이 아랫줄을 더이상 실행시키지 않는다는 것
    // 아예 빈값은 처리자체를 안해버리려고 If문으로 써준 것
    if (newTodo.todoItem.trim() === "") return;
    console.log("number?", number);

    setTodoList([...todoList, { ...newTodo, id: number }]);
    //다시 initialNewTodo를 초기화시킨건강??
    setNewTodo(initialNewTodo);
    number++;
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>제곧내</label>
        <input
          type="text"
          name="todoItem"
          value={newTodo.todoItem}
          onChange={onChangeHandler}
        />
      </div>
      <button>추가</button>
    </form>
  );
}

export default TextInput;

// import React, { useState } from "react";
// import "./style.css";

// let number = 3;
// function Form({ setTodos, todos }) {

//   const initialState = {
//     id: 0,
//     title: "",
//     body: "",
//     isDone: false,
//   };

//   console.log(todos);

//   const [todo, setTodo] = useState(initialState);

//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setTodo({ ...todo, [name]: value });
//   };

//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     if (todo.title.trim() === "" || todo.body.trim() === "") return;
//     setTodos([...todos, { ...todo, id: number }]);
//     setTodo(initialState);
//     number++;
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className="add-form">
//       <div className="input-group">
//         <label className="form-label">제목</label>
//         <input
//           type="text"
//           name="title"
//           value={todo.title}
//           className="add-input input-body"
//           onChange={onChangeHandler}
//         />
//         <label className="form-label">내용</label>
//         <input
//           type="text"
//           name="body"
//           value={todo.body}
//           className="add-input"
//           onChange={onChangeHandler}
//         />
//       </div>
//       <button className="add-button">추가하기</button>
//     </form>
//   );
// }

// export default Form;
