import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
// import { addTodo } from "../../../redux/modules/todos.js";
import { addTodo } from "../redux/modules/todosReducer";

const Form = () => {
  // nextId : 독특한 아이디를 생성하는 리액트 컴포넌트래
  // 컴포넌트 : 리액트로 만들어진 앱을 이루는 최소한의 단위
  const id = nextId();
  const dispatch = useDispatch();

  // store에 저장을 할 애들은 (글로벌 state로 만들 애들은)
  // 다른데서도 쉽게 사용하려는게 목적인데
  // 지금 입력받을 입력값은 굳이 전역으로 쓸 필요가 없으니까??
  // 그냥 컴포넌트 내에서 만든거일깡??
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  // const todos = useSelector((state) => state.todos.todos);
  const onChangeHandler = (event) => {
    // event로 넘어온 옵줵에 event.target.name이랑 value가 있겠쥐
    const { name, value } = event.target;
    // name은 title아니면 body겠지??
    setTodo({ ...todo, [name]: value });
  };

  // 실제로 버튼이 눌렀을때 발생하는 이벤트이고
  const onSubmitHandler = (event) => {
    // 버튼 눌렀을 때 디폴트값 자체가 새로고침이라서
    // 새로고침이 되지 않게 event.preventDefault를 해준 것
    event.preventDefault();
    //  trim() 메서드는 문자열 양 끝의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열을 반환
    // todo.title이나 todo.body를 trim으로 다듬었는데도 공백이면 암것도 리턴안함
    // return 명령문은 함수 실행을 종료하고, 주어진 값을 함수 호출 지점으로 반환
    if (todo.title.trim() === "" || todo.body.trim() === "") {
      return;
    }

    // dispatch(addTodo({ ...todo, id })); 얘는 configStore에 있는 넘이네
    // addTodo는 액션크리에이터(todos에 있징)
    // 만약 addTodo가 없었으면, 객체타입의 액션값을 넣어줘야 했음
    // dispatch를 통해 addTodo의 액션크리에이터에 내용을 전달하는데,
    // todo 전체랑, id를 넘겨줄거다.
    // { ...todo, id } <<--- 얘가 페이로드네
    // dispatch를 통해 addTodo라는 액션크리에이터에 액션내용(payload)을 전달해준다.
    dispatch(addTodo({ ...todo, id }));
    // 다시 setTodo를 리셋하는 작업인가???
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
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="text"
          name="title"
          // 해당 todo.title에 입력되는 값이 들어간다는 소리
          value={todo.title}
          onChange={onChangeHandler}
        />
        <StFormLabel>내용</StFormLabel>
        <StAddInput
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StAddButton>추가하기</StAddButton>
    </StAddForm>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
