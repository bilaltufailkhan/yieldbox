import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";

const Slider = () => {
  return (
    <div className="slider__section">
      <Container className="min-vh-100 d-flex">
        <Row className="align-items-center vw-100">
          <Col xs="12" className="text-center slider__content">
            <div className="d-inline-flex align-items-center justify-content-between">
              <img src={logo} />
              <h2>Yield Box</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Slider;
