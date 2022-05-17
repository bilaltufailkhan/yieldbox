import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MobileApp = () => {
  return (
    <div className="bgImg mobileapp__section" id="mobileapp__section">
      <div className="container-md min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <Row className="w-100 justify-content-center">
          <Col xs="8" className="text-center">
            <h2>Yieldbox Mobile App</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MobileApp;
