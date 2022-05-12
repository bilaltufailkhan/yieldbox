import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import dummyImg from '../assets/img/demo.png'

const Documents = () => {
  return (
    <div className="documents__section" id="documents__section">
      <Container className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <Row className="w-100">
          <Col xs="12" className="text-center">
            <h2>Documents</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
          </Col>
          <Col xs="12" className="text-center">
            <Row className="justify-content-center mt-5 w-100">
              <Col md="2" sm="6">
                <Card className="text-center text-white p-3">
                  <div className="card__content">
                    <img alt="card img" width={80} src={dummyImg} />
                    <h5>Contract<br />Address</h5>
                    <Link className="btn btn__link"><i class="fa-solid fa-paperclip"></i></Link>
                  </div>
                </Card>
              </Col>
              <Col md="2" sm="6">
                <Card className="text-center text-white p-3">
                  <div className="card__content">
                    <img alt="card img" width={80} src={dummyImg} />
                    <h5>Interfi<br />Audit</h5>
                    <Link className="btn btn__link"><i class="fa-solid fa-paperclip"></i></Link>
                  </div>
                </Card>
              </Col>
              <Col md="2" sm="6">
                <Card className="text-center text-white p-3">
                  <div className="card__content">
                    <img alt="card img" width={80} src={dummyImg} />
                    <h5>Certik<br />Audit</h5>
                    <Link className="btn btn__link"><i class="fa-solid fa-paperclip"></i></Link>
                  </div>
                </Card>
              </Col>
              <Col md="2" sm="6">
                <Card className="text-center text-white p-3">
                  <div className="card__content">
                    <img alt="card img" width={80} src={dummyImg} />
                    <h5>English<br />Whitepaper</h5>
                    <Link className="btn btn__link"><i class="fa-solid fa-paperclip"></i></Link>
                  </div>
                </Card>
              </Col>
              <Col md="2" sm="6">
                <Card className="text-center text-white p-3">
                  <div className="card__content">
                    <img alt="card img" width={80} src={dummyImg} />
                    <h5>Chinese<br />Whitepaper</h5>
                    <Link className="btn btn__link"><i class="fa-solid fa-paperclip"></i></Link>
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

export default Documents;
