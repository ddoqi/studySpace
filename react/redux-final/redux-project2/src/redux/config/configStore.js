// // 일반 리덕스 combineReducers 예시 코드

// import { createStore } from "redux";
// import { combineReducers } from "redux";
// import counter from "../modules/counter";

// const rootReducer = combineReducers({
//   counter,
// });
// const store = createStore(rootReducer);
// export default store;
//---------------------------------------
// src/redux/modules/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import counter from "../modules/counterSlice";
import todos from "../modules/todosSlice";

/**
 * 모듈(Slice)이 여러개인 경우
 * 추가할때마다 reducer 안에 각 모듈의 slice.reducer를 추가해줘야 합니다.
 *
 * 아래 예시는 하나의 프로젝트 안에서 counter 기능과 todos 기능이 모두 있고,
 * 이것을 각각 모듈로 구현한 다음에 아래 코드로 2개의 모듈을 스토어에 연결해준 것 입니다.
 */
// 일반 리덕스에서는 combineReducers라고 썼었음
// 일반 리덕스에서는 먼저 리듀서들을 combineReducers를 통해 합쳐주고
// 합쳐진 rootReducer를 createStore를 통해 store를 생성했었다. 
// 리덕스툴킷은 configureStore 하나로 모듈합치기와 스토어 생성을 하고있다. 
const store = configureStore({
  reducer: { counter: counter, todos: todos },
});

export default store;