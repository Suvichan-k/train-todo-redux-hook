import { combineReducers } from "redux";
import addTodoReducer from "./addTodoReducer";

export default combineReducers({
  addTodo: addTodoReducer,
});
