import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="about__section">
      <Container className="min-vh-100 d-flex">
        <Row className="align-items-center vw-100">
          <Col xs="12" className="text-center about__content">
            <Container>
              <p>
                "Epic Dual Reward with Auto-Staking, Auto-compounding with BUSD
                Reflections"
              </p>
            </Container>
            <Row className="justify-content-center w-100">
              <Col md="3" sm="12" className="my-3">
                <Button className="btn-gradient-dark btn-block btn-lg">
                  Buy on Pancakes
                </Button>
              </Col>
              <Col md="3" sm="12" className="my-3">
                <Button className="btn-gradient-dark btn-block btn-lg">
                  Read Whitepaper
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
