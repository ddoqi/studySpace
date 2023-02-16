// configuration = 환경설정
// config 폴더는 '설정'관련된게 들어있음

// 여기 store에 설정되어 있는 코드들은 리덕스 만든 사람이 이렇게 만든거라 내가 볼 건 없다고 함
// store에 코드 생성 순서
// 1. reducer를 만든다.
// 2. 만든 reducer를 이용해 store 를 만든다.
// 3. 생성한 store를 export 한다.

// state들을 관리하는 메소드들을 모은 것 -> reducer
import { createStore, combineReducers } from "redux";
import todosReducer from "../modules/todosReducer.js";

// 이 state에는 아무 메소드들이나 다 넣는게 아니라
// 해당 전역state를 건드리는 메소드가 들어있는거쥐~~~~
// 메소드가 들어있다는 느낌보다는 리듀서를 통해서 해당 state를 건드려주는 느낌??

// combineReducers는 reducer들을 함께 묶는것
// 이 combineReducers 안에 있는 애들이 reducer라는 걸 알 수 있음.

// todos 가 리턴하는건 결국 state겠지
const rootReducer = combineReducers({
  // modules안에 있는 todos를 reducer로 만들었음
  // todos에는 state랑 액션이 담겨있다.
  todosReducer,
});

// createStore는 파라메터로 리듀서를 받는다.
const store = createStore(rootReducer);

export default store;

// state => 컴포넌트 단위
// proprs로 보냈던 이 state를 전역에서 관리하기 위해서
// 1. 전역 state
// store에 있는 넘들
// 2. 지역 state (=컴포넌트 state)
// 그 컴포넌트 안에만 있는 넘들
