import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Rewards = () => {
  return (
    <div className="rewards__section">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs="12" className="vh-100 text-center">
            <h1>Rewards</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Rewards;
