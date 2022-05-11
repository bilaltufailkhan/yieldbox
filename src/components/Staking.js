import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import apy from "../assets/img/apy.svg";
import autostaking from "../assets/img/autostaking.svg";
import reflection from "../assets/img/reflection.svg";

const Staking = () => {
  return (
    <div className="staking__section">
      <Container className="min-vh-100 d-flex">
        <Row className="align-items-center w-100">
          <Col xs="12" className="text-center staking__content px-5">
            <Container className="px-5">
              <p>FIRST REBASE AUTO-STAKING WITH BUSD REFLECTION</p>
              <h2>+385,945.80%</h2>
              <p>
                Paid every 15 minutes, and a simple buy-hold-earn system that
                grows your $MINT portfolio in your wallet at a lightning fast
                pace.
              </p>
              <Row className="justify-content-center">
                <Col md="3" sm="12" className="my-3">
                  <Card
                    className="text-center"
                    style={{ background: "transparent" }}
                  >
                    <Card.Body>
                      <img src={apy} width="auto" height="50px" />
                      <Card.Text>HIGHEST APY<br />PROTOCOL</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="3" sm="12" className="my-3">
                  <Card
                    className="text-center"
                    style={{ background: "transparent" }}
                  >
                    <Card.Body>
                      <img src={autostaking} width="auto" height="50px" />
                      <Card.Text>Auto-Stake Auto-Compound</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="3" sm="12" className="my-3">
                  <Card
                    className="text-center"
                    style={{ background: "transparent" }}
                  >
                    <Card.Body>
                      <img src={reflection} width="auto" height="50px" />
                      <Card.Text>Hourly BUSD<br />Reflection</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Staking;
