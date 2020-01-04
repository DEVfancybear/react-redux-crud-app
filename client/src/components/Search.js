import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import * as actions from "../actions/index";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // lưu giá trị từ ô input
      keyword: ""
    };
  }
  onHandleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };
  onSearch = () => {
    //khi click vào button search thì sẽ gọi sự kiện onSearch đã được dispatch
    this.props.onSearch(this.state.keyword);
  };
  render() {
    return (
      <Col xs={6} sm={6} md={6} lg={6}>
        <div className="input-group">
          <input
            type="text"
            name="keyword"
            value={this.state.keyword}
            onChange={this.onHandleChange}
            className="form-control"
            placeholder="Nhập từ khóa..."
          />
          <span className="input-group-btn">
            <Button variant="primary" onClick={this.onSearch}>
              <FontAwesomeIcon icon={faSearch} />
              Tìm
            </Button>
          </span>
        </div>
      </Col>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: keyword => {
      dispatch(actions.searchTask(keyword));
    }
  };
};

export default connect(null, mapDispatchToProps)(Search);
