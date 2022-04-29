import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const Tokenomics = () => {
  return (
    <div className="tokenomics__section">
      <Container className="min-vh-100 d-flex">
        <Row className="align-items-center vw-100">
          <Col xs="12" className="text-center tokenomics__content">
            <h2>Tokenomics</h2>
          </Col>
        </Row>
        <Row className="align-items-center vw-100">
          <Col md="6">
            <Table responsive="sm">
              <thead></thead>
            </Table>
          </Col>
          <Col md="6"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tokenomics;
