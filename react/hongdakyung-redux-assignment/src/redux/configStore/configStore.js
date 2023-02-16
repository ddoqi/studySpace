import { createStore, combineReducers } from "redux";
import todosReducer from "../module/Todos.js";

const rootReducer = combineReducers({
  todosReducer,
});

const store = createStore(rootReducer);

export default store;
