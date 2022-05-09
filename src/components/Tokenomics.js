import React from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";

import dummyImg from '../assets/img/demo.png'

const Tokenomics = () => {
  return (
    <div className="tokenomics__section">
      <Container className="min-vh-100 d-flex flex-column justify-content-center">
        <Row className="">
          <Col xs="12" md="6" className="tokenomics__content vw-100 text-center">
            <h2>Tokenomics</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg="6" md="12" className="my-3">
            <Table responsive="sm">
              <tr>
                <td>Token Name:</td>
                <td>Yield Box</td>
              </tr>
              <tr>
                <td>Total Supply:</td>
                <td>325,000</td>
              </tr>
              <tr>
                <td>Symbol:</td>
                <td>$MINT</td>
              </tr>
              <tr>
                <td>Entry Fee:</td>
                <td>14%</td>
              </tr>
              <tr>
                <td>Exit Fee:</td>
                <td>16%</td>
              </tr>
            </Table>
          </Col>
          <Col lg="6" md="12" className="my-3">
            <Container fluid>
              <Row className="my-3">
                <Col xs="6">
                  <Card className="text-center text-white p-3">
                    <div className="card__content">
                      <img alt="card img" src={dummyImg} />
                      <h5>Liquidity Pool</h5>
                    </div>
                  </Card>
                </Col>
                <Col xs="6">
                  <Card className="text-center text-white p-3">
                    <div className="card__content">
                      <img alt="card img" src={dummyImg} />
                      <h5>Rewards</h5>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row className="my-3">
                <Col xs="6">
                  <Card className="text-center text-white p-3">
                    <div className="card__content">
                      <img alt="card img" src={dummyImg} />
                      <h5>Yieldbox Treasury</h5>
                    </div>
                  </Card>
                </Col>
                <Col xs="6">
                  <Card className="text-center text-white p-3">
                    <div className="card__content">
                      <img alt="card img" src={dummyImg} />
                      <h5>Yieldbox Inferno</h5>
                    </div>
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

export default Tokenomics;
