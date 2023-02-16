// 액션 크리에이터와 리듀서 생성

// todo리스트
// 1. 더하기, 빼기, 아이디 얻어오기, 상태바꾸기
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const GET_ID = "GET_ID";
const TOGGLE_ISDONE_STATUS = "TOGGLE_ISDONE_STATUS";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const getId = (payload) => {
  return {
    type: GET_ID,
    payload,
  };
};

export const toggleIsDoneStatus = (payload) => {
  return {
    type: TOGGLE_ISDONE_STATUS,
    payload,
  };
};

// TodoList의 처음 상태
const initialTodoList = {
  todos: [
    {
      id: "1",
      context: "테스트1",
      isDone: false,
    },
    {
      id: "2",
      context: "테스트2",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    context: "",
    isDone: false,
  },
};

const todosReducer = (state = initialTodoList, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        // action.payload에는 id와 NewContext가 들어갈 예정
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case GET_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    case TOGGLE_ISDONE_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
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

    default:
      return state;
  }
};

export default todosReducer;
