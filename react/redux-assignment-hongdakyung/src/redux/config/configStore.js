import { createStore, combineReducers } from "redux";
import todosReducer from "../modules/todosReducer.js";

const rootReducer = combineReducers({
  todosReducer,

});

const store = createStore(rootReducer);

export default store;
