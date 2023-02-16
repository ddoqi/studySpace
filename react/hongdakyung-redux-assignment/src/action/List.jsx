import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteTodo, toggleIsDoneStatus } from "../redux/module/Todos";
import { deleteTodo, toggleIsDoneStatus } from "../redux/module/Todos";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosReducer.todos);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleStatusTodo = (id) => {
    dispatch(toggleIsDoneStatus(id));
  };

  return (
    <div>
      <h2>Working.. 🔥</h2>
      <div>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <div key={todo.id}>
                <Link to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </Link>

                <div>
                  <h2>{todo.context}</h2>
                </div>
                <footer>
                  <button onClick={() => onDeleteTodo(todo.id)}>
                    삭제하기
                  </button>
                  <button
                    borderColor="green"
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </button>
                </footer>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div>
        <h2>Working.. 🔥</h2>
        <div>
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <div key={todo.id}>
                  <Link to={`/${todo.id}`} key={todo.id}>
                    <div>상세보기</div>
                  </Link>

                  <div>
                    <h2>{todo.context}</h2>
                  </div>
                  <footer>
                    <button onClick={() => onDeleteTodo(todo.id)}>
                      삭제하기
                    </button>
                    <button
                      borderColor="green"
                      onClick={() => onToggleStatusTodo(todo.id)}
                    >
                      {todo.isDone ? "취소!" : "완료!"}
                    </button>
                  </footer>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
