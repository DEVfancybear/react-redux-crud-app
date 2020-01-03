//nhiệm vụ của actions là trả ra các types để reducers xử lí
//khi người dùng làm gì đó thì sẽ có các actions tương ứng
import {
  LIST_ALL,
  SAVE_TASK,
  TOGGLE_FORM,
  OPEN_FORM,
  CLOSE_FORM,
  UPDATE_STATUS,
  DELETE_TASK,
  EDIT_TASK
} from "../constants/ActionsTypes";
export const listAll = () => {
  return {
    type: LIST_ALL
  };
};

export const saveTask = task => {
  return {
    type: SAVE_TASK,
    task
  };
};
export const toggleForm = () => {
  return {
    type: TOGGLE_FORM
  };
};
export const closeForm = () => {
  return {
    type: CLOSE_FORM
  };
};

export const openForm = () => {
  return {
    type: OPEN_FORM
  };
};
//muốn cập nhật/xóa thì phải dựa vào id nên tham số cần truyền vào là id
export const updateStatus = id => {
  return {
    type: UPDATE_STATUS,
    id
  };
};
export const deleteTask = id => {
  return {
    type: DELETE_TASK,
    id
  };
};
//cần biết task nào đang edit nên truyền vào 1 cái task
export const editTask = task => {
  return {
    type: EDIT_TASK,
    task
  };
};
