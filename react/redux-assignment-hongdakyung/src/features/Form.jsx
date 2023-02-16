import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { addTodo } from "../redux/modules/todosReducer";

const Form = () => {
  const id = nextId();
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (todo.title.trim() === "" || todo.body.trim() === "") {
      return;
    }

    dispatch(addTodo({ ...todo, id }));

    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
  };

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <InputBox>
          <StFormLabel>Title </StFormLabel>
          <StAddInput
            type="text"
            name="title"
            value={todo.title}
            onChange={onChangeHandler}
          />
          <StFormLabel>&nbsp; &nbsp; &nbsp;Todo </StFormLabel>
          <StAddInput
            type="text"
            name="body"
            value={todo.body}
            onChange={onChangeHandler}
          />
        </InputBox>
        <StAddButton>리스트 추가</StAddButton>
      </StInputGroup>
    </StAddForm>
  );
};

export default Form;

const StInputGroup = styled.div`
  width: 750px;
  margin: 0 auto;
`;

const StFormLabel = styled.label`
  font-size: 25px;
  font-weight: 800;
  padding-right: 20px;
`;

const InputBox = styled.div`
  width: 700px;
  padding-left: 30px;
`;

const StAddForm = styled.form`
  background-color: #161853;
  padding: 30px;
  color: white;
  border: 8px dotted yellow;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgb(245, 246, 158);
  width: 140px;
  color: black;
  font-weight: 700;
  font-size: 20px;
  float: right;
  position: relative;
  left: 110px;
  bottom: 40px;
`;
