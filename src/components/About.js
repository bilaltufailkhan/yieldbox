import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="bgImg about__section" id="about__section">
      <div className="container-md min-vh-100 d-flex">
        <Row className="w-100 align-items-center">
          <Col xs="12" className="text-center about__content">
            <Container>
              <p>
                "Epic Dual Reward with Auto-Staking, Auto-compounding with BUSD
                Reflections"
              </p>
            </Container>
            <Row className="justify-content-center">
              <Col lg="3" md="6" sm="12" className="my-3">
                <Button className="btn-gradient btn-block btn-lg btn">
                  Buy on Pancakes
                </Button>
              </Col>
              <Col lg="3" md="6" sm="12" className="my-3">
                <Button className="btn-gradient btn-block btn-lg btn">
                  Read Whitepaper
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
