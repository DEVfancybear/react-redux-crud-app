import React, { Component } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskLists from "./components/TaskLists";
import { connect } from "react-redux";
import * as actions from "./actions/index";
class App extends Component {
  onToggleForm = () => {
    //gọi lên props onToggleForm đã được dispatch ở mapDispatchToProps
    this.props.onToggleForm(this.state);
  };
  render() {
    const { isDisplayForm } = this.props;
    const elmForm = isDisplayForm === true ? <TaskForm /> : "";

    return (
      <Container>
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <Row>
          <Col
            className={
              isDisplayForm === true
                ? "col-xs-4 col-sm-4 col-mg-4 col-sm-4"
                : ""
            }
          >
            {elmForm}
          </Col>
          <Col
            className={
              isDisplayForm === true
                ? "col-xs-8 col-sm-8 col-mg-8 col-sm-8"
                : "col-xs-12 col-sm-12 col-mg-12 col-sm-12"
            }
          >
            <Button
              variant="primary"
              className="mb-3"
              onClick={this.onToggleForm}
            >
              <FontAwesomeIcon icon={faPlus} />
              Thêm Công Việc
            </Button>
            <Button
              variant="info"
              className="mb-3 ml-3"
              onClick={this.onGenerateData}
            >
              Tạo Dữ Liệu Mẫu
            </Button>
            <Control />
            <TaskLists />
          </Col>
        </Row>
      </Container>
    );
  }
}
//chuyển state trên store thành props của component
const mapStateToProps = state => {
  return {
    //state của store
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    //dispatch action
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
