import React from "react";

// todo={todo}
// // key는 왜보내는거야? 그 유니크 어쩌고 햇던거같은데
// setTodoList={setTodoList}
// deleteHandler={deleteHandler}
// cancelOrDoneHandler={cancelOrDoneHandler}

// 화살표 함수로 다 바꿔놓기 이유없음!!!!!
function TodoBox({ todo, deleteHandler, cancelOrDoneHandler }) {
  return (
    <div>
      <div>
        <h2>위시리스트 내용</h2>
        <div>{todo.todoItem}</div>
      </div>
      <div>
        <button onClick={() => deleteHandler(todo.id)}>삭제하기</button>
        <button
          className="todo-complete-button button"
          onClick={() => cancelOrDoneHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default TodoBox;

// import React from "react";
// import "./style.css";

// function Todo({ todo, ondeleteHandler, onEditHandler }) {
//   return (
//     <div className="todo-container">
//       <div>
//         <h2 className="todo-title">{todo.title}</h2>
//         <div>{todo.body}</div>
//       </div>
//       <div className="button-set">
//         <button
//           className="todo-delete-button button"
//           onClick={() => ondeleteHandler(todo.id)}
//         >
//           삭제하기
//         </button>
//         <button
//           className="todo-complete-button button"
//           onClick={() => onEditHandler(todo.id)}
//         >
//           {todo.isDone ? "취소" : "완료"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Todo;
