import React from "react";
import { Row, Col } from "react-bootstrap";
export default function Header() {
  return (
    <header>
      <Row className="header-title">
        <Col>
          <h1>MY BLOG POSTS</h1>
        </Col>
        <Col className="addBtn">
          <button className="add-btn">+ Add Post</button>
        </Col>
      </Row>
    </header>
  );
}
