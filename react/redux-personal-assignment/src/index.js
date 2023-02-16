import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// ❎❎ 에러일지-------------------------------
// 아래 두 줄 임포트하고 <Provider store={store}> 써주기
// 리스트.js에 Error: could not find react-redux context value; please ensure the component is wrapped in a <Provider>
// ❎❎ -------------------------------
import store from "./redux/config/configStore";
// 리액트는 jsx를 사용하는 애인거고, redux에서 제공하는 Provider를 사용하여
// 생성한 store를 한번에 모든 자식들에게 내려갈 수 잇도록 해주는 넘
// 컴포넌트를 제공한 것
import { Provider } from "react-redux";

// useSelector -> store에 있는 state에 접근을 할 수 있다
// useDispatch -> store에 있는 액션크리에이터를 사용할 수 있다.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
