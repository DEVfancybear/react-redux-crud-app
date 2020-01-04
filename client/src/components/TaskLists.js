import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";
import * as actions from "../actions/index";
class TaskLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //lấy dữ liệu từ form
      filterName: "",
      filterStatus: -1
    };
  }
  onChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    // this.props.onFilter(
    //   name === "filterName" ? value : this.state.filterName,
    //   name === "filterStatus" ? value : this.state.filterStatus
    // );
    //tạo ra 1 cái obj có key-value name và status đã khai báo ở state trên store reducers/filterTable
    const filter = {
      name: name === "filterName" ? value : this.state.filterName,
      status: name === "filterStatus" ? value : this.state.filterStatus
    };
    // khi lấy dc filterName và filterStatus thì lưu nó vào trong store
    this.props.onFilterTable(filter);
    this.setState({
      [name]: value
    });
    // console.log(this.state)
  };
  render() {
    let { tasks, filterTable, keyword, sort } = this.props; //props lấy từ mapStateToProps(tức là lấy ở store)
    // filter on table
    if (filterTable.name) {
      tasks = tasks.filter(task => {
        return (
          task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1
        );
      });
    }

    tasks = tasks.filter(task => {
      //các trường hợp kiểm tra: null,undifined, khác 0
      if (filterTable.status === -1) {
        return task;
      } else {
        return task.status === (filterTable.status === 1 ? true : false);
      }
    });
    //search
    tasks = tasks.filter(task => {
      return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    //sort
    if (sort.by === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sort.value;
        else if (a.name < b.name) return -sort.value;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sort.value;
        else if (a.status < b.status) return sort.value;
        else return 0;
      });
    }
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
                  <input
                    type="text"
                    name="filterName"
                    onChange={this.onChange}
                    value={this.state.filterName}
                    className="form-control"
                  />
                </td>
                <td>
                  <select
                    className="form-control"
                    name="filterStatus"
                    onChange={this.onChange}
                    value={this.state.filterStatus}
                  >
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
    tasks: state.tasks,
    filterTable: state.filterTable,
    keyword: state.search,
    sort: state.sort
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTable: filter => {
      dispatch(actions.filterTask(filter));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskLists);
