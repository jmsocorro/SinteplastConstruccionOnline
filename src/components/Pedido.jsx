
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PedidoItem from "./PedidoItem";

const Pedido = ({ pedido }) => {
    const { pedidoId } = useParams();
    console.log(pedido.datosPedido.nombre);
    const total = pedido.pedido.reduce((accumulator, producto) => {
        return accumulator + producto.unidades * producto.precio;
    }, 0);
    return (
        <Container className={`pedido estado${pedido.estado}`}>
            <Row className="pt-4">
                <Col sm={12}>
                    <h1 className="text-center">Tu pedido [{pedidoId}]</h1>
                </Col>
            </Row>
            <Row className="pt-4 border">
                <Col lg={12}>
                    {pedido.datosPedido.nombre} {pedido.datosPedido.apellido}
                </Col>
            </Row>
            {pedido.pedido.map((producto, prodIndex) => {
                return (
                    <PedidoItem
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
        </Container>
    );
};

export default Pedido;
