import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// import { deleteTodo, toggleStatusTodo } from "../../../redux/modules/todos.js";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todosReducer";
import { Link } from "react-router-dom";

const List = () => {
  // dispatch를 쓴 이유??
  // 아마 store에 있는 initialstate를 건드리기 위한
  // action을 사용하려고 가져왔겠징
  const dispatch = useDispatch();

  // state : 스토어가 가지고 있는 모든 state를 가져옴
  const todos = useSelector((state) => {
    console.log("state :", state);
    // 그냥 todos로 뽑아올 수 있는 이유는 todosReducer 함수에 ( state = initialState) 라고 연결해줬었자농
    return state.todosReducer.todos;
  });
  // 두번째 todos(그 todos.js안에 들어있는 initialState의 todos인가???)
  console.log("state.todos.todos", todos);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <StListContainer>
      <h2>Working.. 🔥</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                {/* Link : a 태그와 비슷하며 to 속성에 설정된링크로 이동, 기록이 history 객체에 저장된다. */}
                {/* 이거 Router.jsx에서 BrowserRouter,Routes, Route 참고해 */}
                <StLink to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </StLink>

                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <StDialogFooter>
                  <StButton
                    borderColor="red"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제하기
                  </StButton>
                  <StButton
                    borderColor="green"
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </StButton>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
      <h2 className="list-title">Done..! 🎉</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                {/* Link */}
                <StLink to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </StLink>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <StDialogFooter>
                  <StButton
                    borderColor="red"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제하기
                  </StButton>
                  <StButton
                    borderColor="green"
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </StButton>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
    </StListContainer>
  );
};

export default List;

const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
