// reducer가 실행되기 위해선, 먼저 ui쪽에서 무언가 이벤트가 발생해야하고
// ui가 던질때, dispatch를 통해서 던진다. (이 dispatcher안에 action을 담는다.)
// store에 있는 reducer는 이 action을 해석한다.

// ?? 모듈 안에 리듀서가 포함
// ?? 모듈을 만들면 store 에 연결을 해주어야 하는데
// 스토어, 모듈, 리듀서
// 스토어 ( 리듀서, 스테이트 ) <- 이벤트헨들러 (이벤트 인지), 액션을 가지고 스토어한테 액션을 전달해준다.
// ?? 모듈 > 스토어

// Action value
const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET _TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// Action Creator -> store의 reducer안에 들어있는넘들이라고 생각하면 됌
// Action value를 통해서 우리는 Action Creator를 만들것
// Todo를 추가하는 action creator
// 이넘들을 ui가 갖다가 쓴다는데..? store가 갖다가 쓰는게 아니구??
// dispatch를 이용해서 이넘들을 갖다가 쓴다는데??

// Form.js에서 페이로드로 들어온 애들 👇👇👇👇
// dispatch(addTodo({ ...todo, id }));
// 새로 작성된 ...todo랑 생성된 id임
// payload에 담긴 내용: ...todo, id
// reducer한테 주는 것 -> 액션 ( 액션 안에 type이랑 payload가 담겨있음 )
export const addTodo = (payload) => {
  // 액션을 리턴해준거임!! (타입이랑 페이로드가 있는게 액션임)
  return {
    type: ADD_TODO,
    payload: payload,
  };
};
//   {type: ADD_TODO, payload : { ...todo, id } }

// Todo를 지우는 action creator
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// Todo를 isDone를 변경하는 action creator
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

// 상세 페이지에서 특정 Todo만 조회하는 action creator
export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

// initial state
// 초기화시키는게 아니라, 원래 store에 들어있는 state - > 한마디로 전역 state
const initialState = {
  todos: [
    {
      id: "1",
      title: "리액트",
      body: "리액트를 배워봅시다",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
  test: {
    a: "a",
  },
};

//object타입이네, object타입인데 value는 배열이여
// const testSee = { a: [{ ㄱ: "1", ㄴ: "2" }, {}], b: [{}, {}] };

// 얘가  리듀서 ( action을 받아서 처리해준다.)
//state가 없을때는 initialState를 디폴트값으로 넣는다.
// 유즈디스페치를 써서 들어오면, 실제로 todos안의 리턴 내용들이 실행되는 것(실제 )

//   action값으로 액션크리에이터가 리턴한 값이 들어옴 {type: ADD_TODO, payload : { ...todo, id } }
// 결국 액션값을 넣어서 특정한 state들을 업데이트 하는 것
//-----------------------------------------------
// 리듀서 : 2개의 인자를 전달받는 자바스크립트 함수이다.
// 첫번째 인자는 현재의 state, 두번째 인자는 action을 받는다.
// action : redux의 state가 어떻게 변할지를 알려주는 인자이다.
const todos = (state = initialState, action) => {
  switch (action.type) {
    // 액션으로 들어온 값 [type] ,[ payload에 담긴 내용: ...todo, id ]
    case ADD_TODO:
      return {
        ...state,
        // 원래의 그 state의 todos를 아래처럼 바꿔주겠다
        // store에 들어있는 state,todos에다가, ...todo, id가 추가되는 것
        // ...state.todos + ...todo, id
        // 기존의 state에다가 액션으로 전달해준 new! ...todo와 id를 추가해주겠다!
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          // 이 payload에는
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };

    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todos;
