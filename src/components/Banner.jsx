import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Banner = () => {
  return (
    <Container fluid>
      <Row className="w-100 ilc">
        <Col xs={12} className="justify-content-center d-flex">
          <div className="saludo">
            Bienvenido a Sinteplast Construcción
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Banner