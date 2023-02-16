import React from "react";
// BrowserRouter, Route, Routes는 react-router-dom에서 제공하는 컴포넌트이다.
// react-router-dom : 페이지를 이동할 때 필요한 라이브러리다.
// SPA방식은 HTML5의 History API를 사용해서 가능하게 만드는데
// 자바스크립트 영역에서 History API를 이용해 현재 페이지 내에서 페이지 이동이 일어난 것처럼 보이게 해준다.
// react-router-dom을 터미널에서 설치하고, package.json에서 확인해볼 수 있음
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

const Router = () => {
  // 라우터에 route를 사용하여, 보여질 페이지들을 모두 한번에 넣어놓은 이유
  // path를 통해서 들어온 특정 'url'을 가지고, 해당 컴포넌트를 라우팅해줄거자넝

  return (
    // BrowserRouter : History API를 사용해 URL과 UI를 동기화하는 라우터
    <BrowserRouter>
      {/* Routes :Route에 매치되는 첫번째 요소를 렌더링 */}
      {/* Routes : 자식 route들을 구성하고 있는 단위 */}
      <Routes>
        {/* 특정 주소에 컴포넌트 연결하는 방법 */}
        {/* 컴포넌트 방식과 JSX렌더링 방식이 있다. */}
        {/* component={보여주고싶은 컴포넌트} //컴포넌트 방식 */}
        {/* component={() => JSX} // 렌더링 방식  */}
        {/* Route : 컴포넌트 속성에 설정된 URL과 현재 경로가 일치하면 해당하는 컴포넌트(ex. <Home/>)를 렌더링 */}
        <Route path="/" element={<Home />} />
        {console.log("Home Route가 실행되었습니다.")}
        <Route path="/:id" element={<Detail />} />
        {console.log("Detail Route가 실행되었습니다.")}
        {/* 🤔 나는 해당 path에 맞는 애만 실행이 되야된다고 생각했는데, 둘다 실행이 되는 이유?? */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
