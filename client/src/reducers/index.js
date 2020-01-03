import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import itemEditing from "./itemEditing";
const reducers = combineReducers({
  tasks,
  isDisplayForm,
  itemEditing
});
export default reducers;
