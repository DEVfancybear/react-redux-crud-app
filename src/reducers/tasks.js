//khai báo state mặc đinhj
import * as types from "../constants/ActionsTypes";
//random chuỗi
var s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// tạo id
var randomID = () => {
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};
const findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};
//lấy dữ liệu trong local để in ra màn hình
const data = JSON.parse(localStorage.getItem("task"));
//state mặc định của component
const initialState = data ? data : [];
const tasks = (state = initialState, action) => {
  let id = "";
  let index = -1;
  switch (action.type) {
    case types.LIST_ALL:
      return state;
      // lưu task vào bảng khi thêm mới
    case types.SAVE_TASK:
      const task = {
        id: action.task.id,
        name: action.task.name,
        status:
          action.task.status === "true" || action.task.status === true
            ? true
            : false
      };
      if (!task.id) {
        task.id = randomID();
        state.push(task);
      } else {
        index = findIndex(state, task.id);
        state[index] = task;
      }
      localStorage.setItem("task", JSON.stringify(state));
      return [...state];
      //update status ẩn/hiện khi click
    case types.UPDATE_STATUS:
      id = action.id;
      index = findIndex(state, id);
      state[index] = {
        ...state[index],
        status: !state[index].status
      };
      localStorage.setItem("task", JSON.stringify(state));
      return [...state];
      //delete task
    case types.DELETE_TASK:
      id = action.id;
      index = findIndex(state, id);
      state.splice(index, 1);
      localStorage.setItem("task", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};
export default tasks;
