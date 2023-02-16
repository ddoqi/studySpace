const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET _TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

const initialState = {
  todos: [
    {
      id: "1",
      title: "크리스마스때 할일",
      body: "케이크 먹기",
      isDone: false,
    },
    {
      id: "2",
      title: "오늘의 공부",
      body: "리덕스 복습하기",
      isDone: false,
    },
    {
      id: "3",
      title: "오늘의 공부",
      body: "공부 다했지롱",
      isDone: true,
    },
  ],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
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
