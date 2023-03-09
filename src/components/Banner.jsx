import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { CartContext } from "../context/StateCartContext";

const Banner = () => {
  const {cartDetails, dominio} = useContext(CartContext);
  console.log(cartDetails, dominio)
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