import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getId } from "../redux/module/Todos";

const DetailPage = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todosReducer.todo);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getId(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>
        <div>
          <header>
            <div>ID :{todo.id}</div>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </button>
          </header>
          <div>{todo.context}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
