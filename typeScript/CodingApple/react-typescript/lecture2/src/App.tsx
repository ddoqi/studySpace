import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "./index";

function App() {
  // redux에 있던 모든 state다 갖고옴
  // store의 타입을 쭉 적어주면 된다.
  //( state : {count:number})
  const 꺼내온거 = useSelector((state: RootState) => state);
  const dispatch: Dispatch = useDispatch();

  return (
    <div className="App">
      {꺼내온거.count}
      <button
        onClick={() => {
          // dispatch 타입지정 => dispatch라는 타입을 리덕스에서 Import 하기
          dispatch({ type: "증가" });
        }}
      >
        버튼
      </button>
      <Profile name="kim"></Profile>
    </div>
  );
}
