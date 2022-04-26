import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Faqs = () => {
  return (
    <div className="faqs__section">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs="12" className="vh-100 text-center">
            <h1>Faqs</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faqs;
