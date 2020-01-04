import * as types from "../constants/ActionsTypes";
const initialState = "";
const search = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.SEARCH:
      return action.keyword;
    default:
      return state;
  }
};
export default search;
