import React from "react";
import { useState } from "react";
import "./App.css";

//🌸🌸 JSX.Element
//JSX.Element :HTML을 변수에 담거나 array나 object에 담는거
// html처럼 생겼으나 실은 jsx라서 그럼
// html요소 타입지정하는 법임
let 박스: JSX.Element = <div></div>;

function App() {
  let [user, setUser] = useState("kim");
  // 🌸🌸 state의 타입지정하기
  // 할 필요없음, 알아서 해준대 퓌발
  // 만약 []를 집어넣으면? string[]가 알아서 지정이 됌
  // but, 가끔가다 string | number 타입을 넣어주고 싶다면?
  // => 제네릭 문법 사용
  let [제네릭, set제네릭] = useState<string | number>("");

  return (
    <div>
      <h4>안녕하십니까</h4>
      {/* 🌸🌸 프롭스에 타입지정하기 */}
      {/* 프롭스로 전달한 글자나 데이터들은 */}
      {/* 전부 object에 담긴다. */}
      {/* 따라서 object 타입지정처럼 28번라인에 설정해주기 ⭐️*/}
      <Profile name="철수" age="30"></Profile>
    </div>
  );
}

// 🌸🌸 컴포넌트
// = html을 함수로 싸맨것
// html을 재사용하기가 편함
// 컴포넌트 타입지정 => '함수'의 타입지정은 2군데가 가능
// 1) 파라메터랑 2) 리턴부분
function Profile(props: { name: string; age: string }): JSX.Element {
  //  ⭐️ 너무 기니까 type alias로 바꿔주장(28번 라인에 프롭스부분)
  return <div>{props.name}프로필입니다.</div>;
  // return 123; <---요러면 에러남
}

export default App;
