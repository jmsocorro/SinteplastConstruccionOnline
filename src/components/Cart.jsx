import { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { ProvContextoCarro } from "../context/EstadoCarroContexto";
import CartForm from "./CartForm";
import CartItem from "./CartItem";

const Cart = () => {
    const { carro, total, estadoPedido, asignarEstado, borrarCarro } =
        useContext(ProvContextoCarro);

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
            <Container className={`carro estado${estadoPedido}`}>
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
                            prodIndex={prodIndex}
                        />
                    );
                })}
                <Row className="pt-4">
                    <Col
                        lg={7}
                        md={7}
                        sm={6}
                        className="fs-3 d-flex align-items-center justify-content-center flex-column"
                    >
                        <button className="btn btn-light btn-sm"  onClick={() => {
                                borrarCarro();
                            }}>Vaciar pedido</button>
                    </Col>
                    <Col
                        lg={3}
                        md={3}
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
                    <Col>
                        <Button
                            className="finalizar w-100 my-3"
                            variant="primary"
                            size="lg"
                            onClick={() => asignarEstado(1)}
                        >
                            FINALIZAR PEDIDO
                        </Button>
                        <Button
                            className="modificar w-100 my-3"
                            variant="secondary"
                            size="lg"
                            onClick={() => asignarEstado(0)}
                        >
                            Modificar PEDIDO
                        </Button>
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
