import { Col, Container, Row } from "react-bootstrap";
import { FullPage, Slide } from "react-full-page/lib";
import Navigation from "../components/global/Navigation";
import Slider from "../components/Slider";

const AdminView = (props) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <FullPage duration={10}>
              <Slide>
                <Navigation />
              </Slide>
              <Slide>
                <Slider />
              </Slide>
            </FullPage>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminView;
