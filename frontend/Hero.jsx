import { Container, Row, Col, Card } from "react-bootstrap";
import icon1 from "./public/images/icon1.png";
import icon2 from "./public/images/icon2.png";
import icon5 from "./public/images/icon5.png";

const Hero = () => {
  return (
    <section className="hero p-4 ">
      <Container>
        <Row className="justify-content-center text-center">
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={4}
            className="mb-4 d-flex align-items-center justify-content-center"
          >
            <Card className="p-2">
              <Card.Img
                variant="top"
                src={icon1}
                className="img-fluid m-auto"
                style={{ maxWidth: "50px" }}
              />
              <Card.Body>
                <Card.Text>
                  <strong>Fast Orders</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={4}
            className="mb-4 d-flex align-items-center justify-content-center"
          >
            <Card className="p-2">
              <Card.Img
                variant="top"
                src={icon2}
                className="img-fluid m-auto"
                style={{ maxWidth: "50px" }}
              />
              <Card.Body>
                <Card.Text>
                  <strong>Quick Shipping</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={4}
            className="mb-4 d-flex align-items-center justify-content-center"
          >
            <Card className="p-2">
              <Card.Img
                variant="top"
                src={icon5}
                className="img-fluid m-auto"
                style={{ maxWidth: "50px" }}
              />
              <Card.Body>
                <Card.Text>
                  <strong>Online Orders</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
