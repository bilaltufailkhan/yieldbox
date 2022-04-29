import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Earning = () => {
  return (
    <div className="earning__section">
      <Container className="min-vh-100 d-flex">
        <Row className="justify-content-center align-items-center vw-100">
          <Col xs="12" md="6" className="earning__content">
            <h2>How much can I will earn?</h2>
            <ul>
              <li>
                <p>
                  At the end of the year and with <span>$1,000 USD</span> of{" "}
                  <span>$MINT</span> invested.
                </p>
              </li>
              <li>
                <p>
                  You can earn up to <span>$3,850,945.80 USD</span> of{" "}
                  <span>
                    $MINT at 385,945.80% APY* plus an hourly BUSD rewards
                  </span>
                  .
                </p>
              </li>
            </ul>
            <Button className="btn-gradient w-auto px-5 btn-lg my-3">
              Audit Link
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Earning;
