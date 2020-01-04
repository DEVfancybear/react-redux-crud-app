import * as types from "../constants/ActionsTypes";
const initialState = {
  id: "",
  name: "",
  status: false
};
const itemEditing = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.EDIT_TASK:
      // console.log(action)
      return action.task;
    default:
      return state;
  }
};
export default itemEditing;
