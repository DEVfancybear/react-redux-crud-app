import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Col from "react-bootstrap/Col";

class Search extends Component {
  render() {
    return (
      <Col xs={6} sm={6} md={6} lg={6}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập từ khóa..."
          />
          <span className="input-group-btn">
            <Button variant="primary">
              <FontAwesomeIcon icon={faSearch} />
              Tìm
            </Button>
          </span>
        </div>
      </Col>
    );
  }
}

export default Search;
