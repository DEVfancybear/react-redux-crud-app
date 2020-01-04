import * as types from "../constants/ActionsTypes";
//trạng thái ban đầu của form(tức là đóng)
const initialState = false;
const isDisplayForm = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.TOGGLE_FORM:
      // lấy state và chuyển nó từ true sang false và ngược lại
      return !state;
    case types.OPEN_FORM:
      // return trực tiếp về true
      return true;
    case types.CLOSE_FORM:
      return false;
    default:
      return state;
  }
};
export default isDisplayForm;
