import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import * as actions from "../actions/index";
class TaskItem extends Component {
  showStatusElement() {
    return (
      <span
        className={this.props.task.status ? "bg bg-danger" : "bg bg-info"}
        onClick={this.onUpdateStatus}
      >
        {this.props.task.status === true ? "Kích Hoạt" : "Ẩn"}
      </span>
    );
  }
  //cập nhật trạng thái ẩn/hiện khi click vào
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };
  //xóa task
  onDeleteItem = () => {
    this.props.onDeleteItem(this.props.task.id);
    this.props.onCloseForm();
  };
  //chỉnh sửa task
  onEditTask = () => {
    this.props.onOpenForm();
    this.props.onEditTask(this.props.task);
  };
  render() {
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.task.name}</td>
        <td className="text-center">{this.showStatusElement()}</td>
        <td className="text-center">
          <Button onClick={ this.onEditTask } type="button" variant="warning">
            <FontAwesomeIcon icon={faPen} />
            Sửa
          </Button>
          &nbsp;
          <Button variant="danger" onClick={this.onDeleteItem}>
            <FontAwesomeIcon icon={faTrash} />
            Xóa
          </Button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    //dispatch action
    onUpdateStatus: id => {
      dispatch(actions.updateStatus(id));
    },
    onDeleteItem: id => {
      dispatch(actions.deleteTask(id));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onEditTask: task => {
      dispatch(actions.editTask(task));
    }
  };
};
export default connect(null, mapDispatchToProps)(TaskItem);
