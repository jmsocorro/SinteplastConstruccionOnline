import { useState, useContext } from "react";
import {
    Col,
    Row,
    Figure,
    Ratio,
    OverlayTrigger,
    Tooltip,
} from "react-bootstrap";

import { ProvContextoCarro } from "../context/EstadoCarroContexto";

const CartItem = ({ producto, prodIndex }) => {
    // traigo el carro del context
    const { agregarProducto, quitarProducto } = useContext(ProvContextoCarro);
    // traigo el producto por props
    const { id, nombre, stock, precio, archivo, unidades } = producto;
    let rutaImagen =
        typeof archivo === "undefined"
            ? `https://sinteplastconstruccion.com.ar/assets/img/noimg.png`
            : `https://sinteplastconstruccion.com.ar/assets/img/sinteplastconstruccion.com.ar/photos/h300/${archivo}`;

    const [unidadesProd, asignarUnidades] = useState(unidades);

    const modificarUnidades = (modificacion) => {
        let unidadesMinimas = 1;
        let nuevasUnidades =
            modificacion === 0 ? modificacion : unidades + modificacion;
        if (nuevasUnidades < unidadesMinimas) {
            nuevasUnidades = unidadesMinimas;
        } else if (nuevasUnidades > stock) {
            nuevasUnidades = stock;
        }
        producto.unidades = nuevasUnidades;
        asignarUnidades(nuevasUnidades);
    };

    return (
        <Row className={`producto producto${id} pt-4 pb-1 border-bottom`}>
            <Col
                lg={1}
                md={2}
                sm={3}
                className="d-flex align-items-center justify-content-center "
            >
                <Ratio aspectRatio="1x1">
                    <div className="d-flex align-items-center">
                        <Figure>
                            <Figure.Image
                                src={rutaImagen}
                                width="100%"
                                height="100%"
                                alt={nombre}
                            />
                        </Figure>
                    </div>
                </Ratio>
            </Col>
            <Col
                lg={6}
                md={5}
                sm={9}
                className="d-flex align-items-center justify-content-left "
            >
                <div className="informacion">
                    <h3>{nombre}</h3>
                    <h5>{`Precio unitario: $${precio}`}</h5>
                </div>
            </Col>
            <Col
                lg={3}
                md={3}
                sm={6}
                className="d-flex align-items-center justify-content-center flex-column"
            >
                <div className="comprar p-2 border border-2 border-primary rounded-4 d-flex align-items-center justify-content-center fs-3">
                    <OverlayTrigger
                        key="quitarunidades"
                        placement="top"
                        overlay={
                            <Tooltip id="quitarunidades">
                                Quitar Unidades
                            </Tooltip>
                        }
                    >
                        <span
                            className="boton material-symbols-outlined fs-5 bg-secondary rounded-circle text-light p-1 mx-1"
                            onClick={() => {
                                modificarUnidades(-1);
                            }}
                        >
                            remove
                        </span>
                    </OverlayTrigger>
                    <div className="d-inline-block p-2 fs-4">
                        {unidadesProd}
                    </div>
                    <OverlayTrigger
                        key="sumarunidades"
                        placement="top"
                        overlay={
                            <Tooltip id="sumarunidades">Sumar Unidades</Tooltip>
                        }
                    >
                        <span
                            className="boton material-symbols-outlined fs-5 bg-secondary rounded-circle text-light p-1 mx-1"
                            onClick={() => {
                                modificarUnidades(1);
                            }}
                        >
                            add
                        </span>
                    </OverlayTrigger>
                    <OverlayTrigger
                        key="resetearunidades"
                        placement="top"
                        overlay={
                            <Tooltip id="resetearunidades">
                                Resetear Unidades
                            </Tooltip>
                        }
                    >
                        <span
                            className="boton material-symbols-outlined fs-5 bg-secondary rounded-circle text-light p-1 mx-1"
                            onClick={() => {
                                modificarUnidades(0);
                            }}
                        >
                            close
                        </span>
                    </OverlayTrigger>
                    <OverlayTrigger
                        key="agregaralcarrito"
                        placement="top"
                        overlay={
                            <Tooltip id="agregaralcarrito">
                                Modificar el pedido
                            </Tooltip>
                        }
                    >
                        <span
                            className="boton material-symbols-outlined fs-5 bg-secondary rounded-circle text-light p-1 mx-1"
                            onClick={() => {
                                agregarProducto(producto, prodIndex, unidades);
                            }}
                        >
                            add_shopping_cart
                        </span>
                    </OverlayTrigger>
                    <OverlayTrigger
                        key="quitardelcarrito"
                        placement="top"
                        overlay={
                            <Tooltip id="quitardelcarrito">
                                Quitar del pedido
                            </Tooltip>
                        }
                    >
                        <span
                            className="boton material-symbols-outlined fs-5 bg-secondary rounded-circle text-light p-1 mx-1"
                            onClick={() => {
                                quitarProducto(producto, prodIndex, unidades);
                            }}
                        >
                            remove_shopping_cart
                        </span>
                    </OverlayTrigger>
                </div>
                <div className="disponibles sotck p-2 text-center">{`Disponibles: ${stock}`}</div>
            </Col>
            <Col
                lg={2}
                md={2}
                sm={6}
                className="d-flex align-items-center justify-content-center "
            >
                <h3>{`$${precio * unidadesProd}`}</h3>
            </Col>
        </Row>
    );
};

export default CartItem;
