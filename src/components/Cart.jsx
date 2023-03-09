import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Cart = () => {
  return (
    <Container>
      <Row className="pt-4">
        <Col sm={12}>
          <h1 className="text-center">Tu pedido</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
