import { Provider } from "react-redux";
import { createStore } from "redux";

interface Counter {
  count: number;
}
// 위에 interface로 했음
const 초기값: Counter = { count: 0 };

// reducer : state 초기값 설정, state변경
// 첫번째 파라메터는 타입지정할 필요가 없음 => 디폴트 문법이라성
// 오른쪽에 있는걸로 자동으로 타입지정이 된다.
// action : 컴포넌트 안에서 state 수정요청을 dispatch로 날리는데
// 그 파라메터가 action에 들어감 ex) action : {type:string}
// 이런식으로도 쓸 수 있음
function reducer(state = 초기값, action: any) {
  // 여기라다 리턴타입도 지정할 수 있겠지
  if (action.type === "증가") {
    return { count: state.count + 1 };
  } else if (action.type === "감소") {
    return { count: state.count - 1 };
  } else {
    return initialState;
  }
}

const store = createStore(reducer);

// store의 타입 미리 export 해두기
// App.tsx의 10번 라인
export type RootState = ReturnType<typeof store.getState>;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
