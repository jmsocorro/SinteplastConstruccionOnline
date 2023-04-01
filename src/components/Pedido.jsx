import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import PedidoItem from "./PedidoItem";

const Pedido = ({ pedido }) => {
    const { pedidoId } = useParams();
    const estados = [
        "Pedido abierto",
        "Pedido cerrado",
        "En preparación",
        "En camino",
        "Entregado",
        "Entrega Fallida",
    ];
    const total = pedido.pedido.reduce((accumulator, producto) => {
        return accumulator + producto.unidades * producto.precio;
    }, 0);
    return (
        <Container className={`pedido estado${pedido.estado}`}>
            <div className="border my-4 p-4">
                <Row className="border-bottom pb-4">
                    <Col sm={12}>
                        <h1 className="text-center">Tu pedido [{pedidoId}]</h1>
                    </Col>
                    <Col lg={6} className="datos fecha" data-titulo="Fecha">
                        {new Date(pedido.fecha.seconds  * 1000 ).toLocaleString("es-ES", {
                            month: "long",
                            day: "2-digit",
                            year: "numeric",
                        })}
                    </Col>
                    <Col lg={6} className="datos estado" data-titulo="estado">
                        {estados[pedido.estado]}
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col lg={12} className="fs-4 fw-bold">Datos del comprador</Col>
                    <Col lg={4} className="datos nombre" data-titulo="Nombre y Apellido">
                        {pedido.datosPedido.nombre} {pedido.datosPedido.apellido}
                    </Col>
                    <Col lg={4} className="datos celular" data-titulo="Celular">
                        {pedido.datosPedido.ddi} {pedido.datosPedido.cca} {pedido.datosPedido.cnum}
                    </Col>
                    <Col lg={4} className="datos email" data-titulo="Correo electrónico">
                        {pedido.datosPedido.email}
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col lg={12} className="fs-4 fw-bold">Dirección de envío</Col>
                    <Col lg={6} className="datos direccion" data-titulo="Calle">
                        {pedido.datosPedido.calle} {pedido.datosPedido.calleNum} {pedido.datosPedido.piso} 
                    </Col>
                    <Col lg={6} className="datos celular" data-titulo="Localidad">
                        {pedido.datosPedido.localidad} [{pedido.datosPedido.cp}] {pedido.datosPedido.provincia}
                    </Col>
                </Row>

            </div>
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
