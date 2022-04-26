import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Buy = () => {
  return (
    <div className="buy__section">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs="12" className="vh-100 text-center">
            <h1>Buy</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Buy;
