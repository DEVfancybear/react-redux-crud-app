import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";
class TaskLists extends Component {
  render() {
    const { tasks } = this.props;
    const element = tasks.map((task, index) => {
      return <TaskItem key={index} task={task} />;
    });
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <select className="form-control">
                    <option value={-1}>Tất Cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích Hoạt</option>
                  </select>
                </td>
                <td />
              </tr>
              {element}
            </tbody>
          </table>
        </Col>
      </Row>
    );
  }
}
//các state của store sẽ chuyển thành các props của component này, tham số state chính là của store
const mapStateToProps = state => {
  //lên store lấy các state ở reducer/index.js
  return {
    //state.tasks lấy ở reducers/index 
    tasks : state.tasks
  };
};
export default connect(mapStateToProps,null)(TaskLists);
