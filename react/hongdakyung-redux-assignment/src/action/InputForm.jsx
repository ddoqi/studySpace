import React, { useState } from "react";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { addTodo } from "../redux/module/Todos";
// react-redux , react-id-generator

const InputForm = () => {
  const id = nextId();
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({
    id: 0,
    context: "",
    isDone: false,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (newTodo.context.trim() === "") return;
    dispatch(addTodo({ ...newTodo, id }));
    setNewTodo({
      id: 0,
      context: "",
      isDone: false,
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>제목</label>
        <input
          type="text"
          name="context"
          value={newTodo.context}
          onChange={onChangeHandler}
        />
      </div>
      <button>추가하기</button>
    </form>
  );
};

export default InputForm;
