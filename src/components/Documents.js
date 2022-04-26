import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Documents = () => {
  return (
    <div className="documents__section">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs="12" className="vh-100 text-center">
            <h1>Documents</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Documents;
