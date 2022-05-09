import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

import logo from '../assets/img/logo.svg'
import check from '../assets/img/check.png'
import cross from '../assets/img/cross.png'


const Advantage = () => {
  return (
    <div className="advantage__section">
      <Container className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <Row className="my-3">
          <Col xs="12" className="text-center advantage__content">
            <h2>Competitive Advantage</h2>
          </Col>
        </Row>
        <Row className="advantage__table my-3 p-4">
          <Col lg="12" md="12">
            <Table borderless responsive="sm" className="align-middle" style={{ width: "100% !important" }}>
              <thead>
                <tr>
                  <th>Features</th>
                  <th><img src={logo} width="20px" height="auto" alt="Yield Box" /> Yield Box</th>
                  <th>SAFUU</th>
                  <th>LIBERO</th>
                  <th>TITANO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>APY</td>
                  <td>825,992.35%</td>
                  <td>383025.8%</td>
                  <td>158893.59%</td>
                  <td>102483.58%</td>
                </tr>
                <tr>
                  <td>Fees</td>
                  <td>13% / 17%</td>
                  <td>14% / 16%</td>
                  <td>15% / 25%</td>
                  <td>13% / 18%</td>
                </tr>
                <tr>
                  <td>Rebase Frequency</td>
                  <td>1 block (3 seconds)</td>
                  <td>15 minutes</td>
                  <td>30 minutes</td>
                  <td>30 minutes</td>
                </tr>
                <tr>
                  <td>NFT Collection</td>
                  <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                  <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                </tr>
                <tr>
                  <td>WSF Bank</td>
                  <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                  <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                  <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                </tr>
                <tr>
                  <td>Generate Revenue to Backup High APY</td>
                  <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                  <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                  <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Advantage;
