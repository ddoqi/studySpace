import React from "react";

function TodoItem(props) {
  console.log("props:", props);
  return (
    <div>
      <div>
        <div id="todoList">
          🟡 {props.todoList.todoItem}
          <button
            id="deleteBtn"
            onClick={() => {
              props.deleteItem(props.todoList.id);
            }}
          >
            삭제
          </button>
          <button
            className="todo-complete-button button"
            onClick={() => props.onEditHandler(props.todoList.id)}
          >
            {props.todoList.isDone ? "취소" : "완료"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

// import React from "react";

// function TodoItem(props) {
//   console.log("props:", props);

//   return (
//     <div>
//       <div id="todoList">
//         🟡 {props.todoList.id} - {props.todoList.todoItem}
//         <button
//           id="deleteBtn"
//           onClick={() => {
//             props.deleteItem(props.todoList.id);
//           }}
//         >
//           삭제
//         </button>
//       </div>
//     </div>
//   );
// }

// export default TodoItem;
