import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const Rewards = () => {
  return (
    <div className="bgImg rewards__section" id="rewards__section">
      <div className="container-md min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <Row className="my-3 justify-content-center">
          <Col xs="8" className="text-center rewards__content">
            <h2>APY/Dual Reward Tax</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
          </Col>
        </Row>
        <Row className="my-3 w-100 justify-content-center">
          <Col xs="12" className="my-3">
            <Table className="rewards__table align-center text-center rounded" responsive="sm">
              <div className="my-3 w-100 border-0">
                <tr className="w-100">
                  <td>APY</td>
                  <td>14% <span>Reflection to Holders</span></td>
                  <td>2% <span>Marketing</span></td>
                  <td>1% <span>Liquidity Pool</span></td>
                  <td>1% <span>BuyBack {"&"} Burn</span></td>
                </tr>
              </div>
              <div className="my-3 w-100 border-0">
                <tr className="w-100">
                  <td>APY</td>
                  <td>14% <span>Reflection to Holders</span></td>
                  <td>2% <span>Marketing</span></td>
                  <td>1% <span>Liquidity Pool</span></td>
                  <td>1% <span>BuyBack {"&"} Burn</span></td>
                </tr>
              </div>
            </Table>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Rewards;
