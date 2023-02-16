import React, { useState } from "react";
import TodoBox from "../todo/TodoBox";
//styled-componenet
import styled from "styled-components";

//<TodoList todoList={todoList} setTodoList={setTodoList}/>
// 함수선언문 :
// 함수표현식 : 특정 변수에 할당하는 것
// { }
const TodoList = ({ todoList, setTodoList }) => {
  //state는 항상 최상단에 있어야함 -> props와 state가 제일 중요
  //useState는 배열을 반환한다.
  const [color, setColor] = useState("blue");

  //  삭제기능
  // handleDelete
  const deleteHandler = (todoId) => {
    const deleteAfterTodoList = todoList.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodoList(deleteAfterTodoList);
  };

  //   // '취소' 아니면 '완료'버튼
  const cancelOrDoneHandler = (todoId) => {
    const cancelOrDoneAfterTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodoList(cancelOrDoneAfterTodoList);
  };

  return (
    <div>
      {/* jsx에서 객체를 만든다 = 중괄호를 쓴다 => js를 쓴다, style은 객체를 받아서 그 값을 적용시킴 */}
      {/* 케밥케이스 : font-size -> css, 쿼리셀렉터, 파이썬 */}
      {/* 카멜케이스 : fontSize -> 존재하는 모든 js에서 다씀 */}
      {/* 파스칼케이스 : FontSize */}
      {/* 컴포넌트는 파스칼 케이스를 사용 */}
      {/* 컴포넌트에도 onClick을 달 수 있음 */}

      <TitleContainer
        color={color}
        onClick={() => {
          setColor(color === "blue" ? "red" : "blue");
        }}
      >
        Working.. 🔥
      </TitleContainer>

      {/* todo.isDone이 false면 아래 코드를 뽑아내고  */}
      <div>
        {todoList.map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoBox
                todo={todo}
                // key는 왜보내는거야? 그 유니크 어쩌고 햇던거같은데
                // 리액트는 가상돔을 씀

                key={todo.id}
                // todoBox에서 안쓰던데, 얜 왜 같이보낸겨
                // setTodoList={setTodoList}
                deleteHandler={deleteHandler}
                cancelOrDoneHandler={cancelOrDoneHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <h2>Done..! 🎉</h2>
      <div>
        {/* todo의  */}
        {todoList.map((todo) => {
          if (todo.isDone) {
            return (
              <TodoBox
                todo={todo}
                // key는 왜보내는거야? 그 유니크 어쩌고 햇던거같은데
                // key값을 보내는 이유

                key={todo.id}
                // todoBox에서 안쓰던데, 얜 왜 같이보낸겨
                setTodoList={setTodoList}
                deleteHandler={deleteHandler}
                cancelOrDoneHandler={cancelOrDoneHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

//styled-component는 여기다가 작성
//styled.h2 : h2를 꾸며서 쓰고 싶다는 의미
const TitleContainer = styled.h2`
  color: ${(props) => {
    return props.color;
  }};
  padding: 20px;
  font-size: 20px;
`;

export default TodoList;

// import React from "react";
// import TodoBox from "../todo/TodoBox";
// import "./style.css";

// function List({ todos, setTodos }) {

//   // 삭제기능
//   const ondeleteHandler = (todoId) => {
//     const newTodos = todos.filter((todo) => {
//       return todo.id !== todoId;
//     });

//     setTodos(newTodos);
//   };

//   // '취소' 아니면 '완료'버튼
//   const onEditHandler = (todoId) => {
//     const newTodos = todos.map((todo) => {
//       if (todo.id === todoId) {
//         return {
//           ...todo,
//           isDone: !todo.isDone,
//         };
//       } else {
//         return { ...todo };
//       }
//     });
//     setTodos(newTodos);
//   };

//   return (
//     <div className="list-container">
//       <h2 className="list-title">Working.. 🔥</h2>
//       <div className="list-wrapper">
//         {todos.map((todo) => {
//           if (!todo.isDone) {
//             return (
//               <Todo
//                 todo={todo}
//                 key={todo.id}
//                 setTodos={setTodos}
//                 ondeleteHandler={ondeleteHandler}
//                 onEditHandler={onEditHandler}
//               />
//             );
//           } else {
//             return null;
//           }
//         })}
//       </div>
//       <h2 className="list-title">Done..! 🎉</h2>
//       <div className="list-wrapper">
//         {todos.map((todo) => {
//           if (todo.isDone) {
//             return (
//               <Todo
//                 todo={todo}
//                 key={todo.id}
//                 setTodos={setTodos}
//                 ondeleteHandler={ondeleteHandler}
//                 onEditHandler={onEditHandler}
//               />
//             );
//           } else {
//             return null;
//           }
//         })}
//       </div>
//     </div>
//   );
// }

// export default List;
