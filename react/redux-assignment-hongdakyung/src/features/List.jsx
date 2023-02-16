import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todosReducer";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => {
    console.log("state :", state);

    return state.todosReducer.todos;
  });

  console.log("state.todos.todos", todos);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <StListContainer>
      <TodoHead>🔴 TodoList</TodoHead>
      <StListWrapper>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <StTodoContainer
                key={todo.id}
                backgroundColor="rgb(248, 129, 163)"
              >
                <BoxTodo>
                  <BoxTodoTitle className="todo-title">
                    {todo.title}
                  </BoxTodoTitle>
                  <BoxTodoBody> ❏ {todo.body}</BoxTodoBody>
                </BoxTodo>
                <StDialogFooter>
                  <StButton
                    borderColor="rgb(40, 178, 63)"
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "cancel" : "Done"}
                  </StButton>
                  <StButton
                    borderColor="black"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    Delete
                  </StButton>
                </StDialogFooter>
                <StLink to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </StLink>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>

      <TodoHead>🟢 Done</TodoHead>
      <StListWrapper>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <StTodoContainer
                key={todo.id}
                backgroundColor="rgb(102, 214, 121)"
              >
                {/* Link */}

                <BoxTodo>
                  <BoxTodoTitle className="todo-title">
                    {todo.title}
                  </BoxTodoTitle>
                  <BoxTodoBody> ☑️ {todo.body}</BoxTodoBody>
                </BoxTodo>
                <StDialogFooter>
                  <StButton
                    borderColor="rgb(225, 79, 120)"
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "cancel" : "done"}
                  </StButton>
                  <StButton
                    borderColor="black"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    Delete
                  </StButton>
                </StDialogFooter>
                <StLink to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </StLink>
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
  gap: 20px;
`;

const StTodoContainer = styled.div`
  width: 250px;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 15px;
  float: right;
  margin-top: 15px;
  padding: 5px;
  background-color: white;
  border-radius: 10px;
  font-weight: 700;
`;

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
  margin-top: 14px;
`;

const StButton = styled.button`
  border: 3px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: ${({ borderColor }) => borderColor};
  border-radius: 12px;
  cursor: pointer;
  color: white;
  font-size: 18px;
`;

const BoxTodo = styled.div`
  width: 230px;
  padding: 10px;
  background-color: white;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
`;

const BoxTodoTitle = styled.h2`
  font-size: 27px;
  font-weight: 700;
  text-decoration: underline;
`;
const BoxTodoBody = styled.div`
  font-weight: 700;
  color: black;
  font-size: 20px;
`;

const TodoHead = styled.h2`
  color: black;
  border-radius: 12px;
  font-size: 30px;
`;
