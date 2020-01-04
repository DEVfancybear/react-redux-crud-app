import * as types from "../constants/ActionsTypes";
const initialState = {
  by: "name",
  //1 tăng, -1 giảm
  value: 1
};
const sort = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.SORT:
      // console.log(action)
      //chuyển kiểu dữ liệu
      //action.filter thì filter là tham số obj được truyền vào từ actions/index
      return {
        by: action.sort.by,
        value: action.sort.value
      };
    default:
      return state;
  }
};
export default sort;
