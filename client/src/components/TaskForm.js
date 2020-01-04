import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import * as actions from "../actions/index";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      this.setState({
        id: nextProps.itemEditing.id,
        name: nextProps.itemEditing.name,
        status: nextProps.itemEditing.status
      });
    } else {
      this.onClear();
    }
  }
  componentWillMount() {
    if (this.props.itemEditing && this.props.itemEditing.id !== null) {
      this.setState({
        id: this.props.itemEditing.id,
        name: this.props.itemEditing.name,
        status: this.props.itemEditing.status
      });
    } else {
      this.onClear();
    }
  }

  // onCloseForm = () => {
  //   this.props.onCloseForm();
  // };
  onHandleChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  //clear về trạng thái ban đầu
  onClear = () => {
    this.setState({
      name: "",
      status: false
    });
  };
  //xử lí từ form
  onSubmitForm = e => {
    e.preventDefault();
    // console.log(this.state);
    //save task vào bảng
    this.props.onSaveTask(this.state);
    //đóng form sau khi enter
    this.props.onCloseForm();
    //clear về trạng thái ban đầu sau khi ấn enter
    this.onClear();
  };
  // click vào sẽ đóng form
  onExitForm = () => {
    this.props.onCloseForm();
  };
  render() {
    if (!this.props.isDisplayForm) return null;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {!this.state.id ? "Thêm Công Việc" : "Cập Nhật Công Việc"}
            <span>
              <FontAwesomeIcon
                onClick={this.onExitForm}
                icon={faTimes}
                style={{ color: "green" }}
              />
            </span>
          </h3>{" "}
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmitForm}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onHandleChange}
                className="form-control"
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              className="form-control"
              value={this.state.status}
              onChange={this.onHandleChange}
              name="status"
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <Button variant="warning" type="submit">
                <FontAwesomeIcon icon={faPlusCircle} />
                Thêm
              </Button>
              &nbsp;
              <Button type="button" variant="danger" onClick={this.onClear}>
                <FontAwesomeIcon icon={faTimes} />
                Hủy Bỏ
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    //state lấy ở reducers/index khi đã được combine
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    //onSaveTask,onCloseForm là 1 dispatch => đã được chuyển thành 1 cái props sau khi dispatch
    onSaveTask: task => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
