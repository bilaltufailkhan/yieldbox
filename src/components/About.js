import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="about__section">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs="12" className="vh-100 text-center">
            <h1>About</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
