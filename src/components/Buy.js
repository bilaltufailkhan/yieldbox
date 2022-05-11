import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import dummyImg from '../assets/img/demo.png'

const Buy = () => {
  return (
    <div className="buy__section">
      <Container className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <Row className="w-100">
          <Col xs="12" className="text-center">
            <h2>How to Buy</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
          </Col>
          <Col xs="12" className="text-center">
            <Row className="justify-content-center mt-5 w-100">
              <Col md="4" sm="12">
                <Card className="text-center text-white p-5">
                  <div className="card__content">
                    <img alt="card img" width={80} src={dummyImg} />
                    <h5>Download and setup MetaMask or TrustWallet</h5>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                  </div>
                </Card>
              </Col>
              <Col md="4" sm="12">
                <Card className="text-center text-white p-5">
                  <div className="card__content">
                    <img alt="card img" width={80} src={dummyImg} />
                    <h5>Buy and Send BNB to your Wallet</h5>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                  </div>
                </Card>
              </Col>
              <Col md="4" sm="12">
                <Card className="text-center text-white p-5">
                  <div className="card__content">
                    <img alt="card img" width={80} src={dummyImg} />
                    <h5>Go to PanecakeSwap and swap for $SGC</h5>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Buy;
