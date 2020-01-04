import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
class Control extends Component {
  render() {
    return (
      <Row className="mb-4">
        <Search/>
        <Col xs={6} sm={6} md={6} lg={6}>
          <Sort />
        </Col>
      </Row>
    );
  }
}

export default Control;
