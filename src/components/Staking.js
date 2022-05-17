import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import apy from "../assets/img/apy.png";
import autostaking from "../assets/img/autostaking.png";
import reflection from "../assets/img/reflection.png";

const Staking = () => {
  return (
    <div className="bgImg staking__section" id="staking__section">
      <div className="container-md min-vh-100 d-flex">
        <Row className="align-items-center w-100">
          <Col xs="12" className="text-center staking__content">
            <div className="container-md px-md-5">
              <p>FIRST REBASE AUTO-STAKING WITH BUSD REFLECTION</p>
              <h2>+1,171,519.70%</h2>
              <p>
                Paid every 5 minutes, and a simple buy-hold-earn system that grows your $BUSD and $YBX portfolio in your wallet at a lightning fast pace.
              </p>
              <Row className="justify-content-center">
                <Col lg="3" md="6" sm="12" className="my-3 mb-md-2 mb-sm-2">
                  <Card
                    className="text-center"
                    style={{ background: "transparent" }}
                  >
                    <Card.Body>
                      <img src={apy} width="auto" height="70px" />
                      <Card.Text>HIGHEST APY<br />PROTOCOL</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3" md="6" sm="12" className="my-3 mb-md-2 mb-sm-2">
                  <Card
                    className="text-center"
                    style={{ background: "transparent" }}
                  >
                    <Card.Body>
                      <img src={autostaking} width="auto" height="70px" />
                      <Card.Text>Auto-Stake <br /> Auto-Compound</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3" md="6" sm="12" className="my-3 mb-md-2 mb-sm-2">
                  <Card
                    className="text-center"
                    style={{ background: "transparent" }}
                  >
                    <Card.Body>
                      <img src={reflection} width="auto" height="70px" />
                      <Card.Text>Hourly BUSD<br />Reflection</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Staking;
