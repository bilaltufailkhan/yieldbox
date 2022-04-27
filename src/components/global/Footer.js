import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="fixed-bottom footer__section py-2">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col xs="4" md="2" className="footer__socials">
            <a href="#" className="social__link">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="social__link">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="social__link">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="social__link">
              <i className="fa-brands fa-medium"></i>
            </a>
            <a href="#" className="social__link">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </Col>
          <Col xs="8" md="4" className="text-end">
            <p>2022 &copy; YieldBox. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
