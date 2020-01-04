import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { ButtonToolbar, SplitButton } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions/index";
class Sort extends Component {
  onClick = (sortBy, sortValue) => {
    this.props.onSort({
      by: sortBy,
      value: sortValue
    });
  };

  render() {
    return (
      <div>
        <ButtonToolbar>
          {["Warning"].map(variant => (
            <SplitButton
              title="Sắp Xếp"
              variant={variant.toLowerCase()}
              id={`dropdown-split-variants-${variant}`}
              key={variant}
            >
              <Dropdown.Item
                eventKey="1"
                onClick={() => this.onClick("name", 1)}
                className={
                  this.props.sort.by === "name" && this.props.sort.value === 1
                    ? "sort_selected"
                    : ""
                }
              >
                Từ A-Z
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="2"
                onClick={() => this.onClick("name", -1)}
                className={
                  this.props.sort.by === "name" && this.props.sort.value === -1
                    ? "sort_selected"
                    : ""
                }
              >
                Từ Z-A
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                eventKey="4"
                onClick={() => this.onClick("status", 1)}
                className={
                  this.props.sort.by === "status" && this.props.sort.value === 1
                    ? "sort_selected"
                    : ""
                }
              >
                Trạng Thái Ẩn
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="4"
                onClick={() => this.onClick("status", -1)}
                className={
                  this.props.sort.by === "status" &&
                  this.props.sort.value === -1
                    ? "sort_selected"
                    : ""
                }
              >
                Trạng Thái Hiện
              </Dropdown.Item>
            </SplitButton>
          ))}
        </ButtonToolbar>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    sort: state.sort
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: sort => {
      //sot.by, sort.value
      dispatch(actions.sortTask(sort));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
