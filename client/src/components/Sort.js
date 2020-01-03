import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";
class Sort extends Component {
  render() {
    return (
      <div>
        <div className="dropdown">
          <Button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
            variant="primary"
          >
            Sắp Xếp <FontAwesomeIcon icon={faSortAlphaDown} />
          </Button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a>Tên A-Z</a>
            </li>
            <li>
              <a>Tên Z-A</a>
            </li>
            <li className="divider" />
            <li>
              <a>Trạng Thái Kích Hoạt</a>
            </li>
            <li>
              <a>Trạng Thái Ẩn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;
