import { Card, Col, Container, Row } from "react-bootstrap";
import { FullPage, Slide } from "react-full-page/lib";
import DashCard from "../components/global/DashCard";
import Navigation from "../components/Navigation";
import SideNav from "../components/SideNav";

const AdminView = (props) => {
  return (
    <div className="main__view">
      <SideNav />
      <Navigation />
      <Container className="vh-100">
        <Row className="justify-content-around w-100 align-items-center">
          <Col md="3" sm="1" className="my-5">
            <DashCard value="2.50" />
          </Col>
          <Col md="3" sm="1" className="my-5">
            <DashCard value="2.50" />
          </Col>
          <Col md="3" sm="1" className="my-5">
            <DashCard value="2.50" />
          </Col>
        </Row>
        <Row className="justify-content-around w-100 align-items-center">
          <Col md="3" sm="1" className="my-5">
            <DashCard value="2.50" />
          </Col>
          <Col md="3" sm="1" className="my-5">
            <DashCard value="2.50" />
          </Col>
          <Col md="3" sm="1" className="my-5">
            <DashCard value="2.50" />
          </Col>
        </Row>
        <Row className="justify-content-around w-100 align-items-center">
          <Col md="3" sm="1" className="my-5">
            <DashCard value="2.50" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminView;
