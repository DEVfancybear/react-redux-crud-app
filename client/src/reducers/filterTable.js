import * as types from "../constants/ActionsTypes";
const initialState = {
  name: "",
  status: -1
};
const filterTable = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.FILTER_TALE:
      // console.log(action)
      //chuyển kiểu dữ liệu
      //action.filter thì filter là tham số obj được truyền vào từ actions/index
      return {
        name: action.filter.name,
        status: parseInt(action.filter.status, 10)
      };
    default:
      return state;
  }
};
export default filterTable;
