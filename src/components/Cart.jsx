import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ProvContextoCarro } from "../context/EstadoCarroContexto";
import CartForm from "./CartForm";
import CartItem from "./CartItem";

const Cart = () => {
    const { carro, total } = useContext(ProvContextoCarro);

    if (carro.length === 0) {
        return (
            <Container>
                <Row className="pt-4">
                    <Col sm={12}>
                        <h1 className="text-center">Tu pedido esta vacío</h1>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        return (
            <Container>
                <Row className="pt-4">
                    <Col sm={12}>
                        <h1 className="text-center">Tu pedido</h1>
                    </Col>
                </Row>
                {carro.map((producto, prodIndex) => {
                    return (
                        <CartItem
                            key={producto.id}
                            producto={producto}
                            podIndex={prodIndex}
                        />
                    );
                })}
                <Row className="pt-4">
                    <Col
                        lg={{ span: 3, offset: 7 }}
                        md={{ span: 3, offset: 7 }}
                        sm={6}
                        className="fs-3 d-flex align-items-center justify-content-center flex-column"
                    >
                        Total
                    </Col>
                    <Col
                        lg={2}
                        md={2}
                        sm={6}
                        className="d-flex align-items-center justify-content-center "
                    >
                        <h1 className="text-center">{`$${total}`}</h1>
                    </Col>
                </Row>
                <Row>
                    <CartForm />
                </Row>
                
            </Container>
        );
    }
};

export default Cart;
