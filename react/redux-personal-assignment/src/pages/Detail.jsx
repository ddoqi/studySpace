import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todosReducer.js";

const Detail = () => {
  // useDispatch 비서같은 애
  const dispatch = useDispatch();
  // useSelector : store에 등록한 state데이터를 가져와서 쓸 수 잇게 해주는 것
  const todo = useSelector((state) => state.todosReducer.todo);

  //useParams 정보를 하나의 변수에 저장한다.
  // url의 id가 변경이 되면
  const { id } = useParams();
  const navigate = useNavigate();

  // 컴포넌트가 렌더링 될때마다 특정 작업을 실행할 수 있도록 하는 훅
  // useEffect는 첫번째 파라메터로 콜백함수를, 두번째는 어레이를 받음
  // useEffect : 의존성배열안의 값이 바뀌면, 콜백함수를 다시 실행한다.
  // 함수의 파라메터로 들어오는게 함수면 콜백함수다
  useEffect(() => {
    dispatch(getTodoByID(id));
    console.log("useEffect콜백함수 실행", id);
  }, [dispatch, id]);
  // 어레이가 비어있으면, 딱 한번만 실행된다.

  useEffect(() => {
    console.log("store에 있는애", todo);
  }, [todo]);

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID :{todo.id}</div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </StButton>
          </StDialogHeader>
          <StTitle>{todo.title}</StTitle>
          <StBody>{todo.body}</StBody>
        </div>
      </StDialog>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
