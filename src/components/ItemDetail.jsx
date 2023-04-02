import { useState, useContext } from "react";
import {
    Row,
    Col,
    Ratio,
    Figure,
    Tooltip,
    Container,
    OverlayTrigger,
} from "react-bootstrap";
import parse from "html-react-parser";

import { ProvContextoCarro } from "../context/EstadoCarroContexto";

const ItemDetail = ({ producto }) => {
    const {
        id,
        nombre,
        descripcion1,
        descripcion2,
        descripcion3,
        descripcion4,
        descripcion5,
        descripcion6,
        descripcion10,
        familia,
        stock,
        precio,
        archivo,
    } = producto;
    let rutaImagen =
        typeof archivo === "undefined"
            ? `https://sinteplastconstruccion.com.ar/assets/img/noimg.png`
            : `https://sinteplastconstruccion.com.ar/assets/img/sinteplastconstruccion.com.ar/photos/h300/${archivo}`;

    const { carro, agregarProducto, quitarProducto } =
        useContext(ProvContextoCarro);
    // Armo una copia temporal del carro
    let carroTemp = carro;

    // Verifico si el producto se encuentra en el carro y copio el index
    let prodIndex = carroTemp.findIndex((prod) => prod.id === id);

    // Si el producto se encuentra en el carrito modifico las unidades iniciales
    let unidadesIniciales =
        prodIndex !== -1 ? carroTemp[prodIndex].unidades : 1;

    const [unidades, asignarUnidades] = useState(unidadesIniciales);

    const modificarUnidades = (modificacion) => {
        let unidadesMinimas = 1;
        let nuevasUnidades =
            modificacion === 0 ? modificacion : unidades + modificacion;
        if (nuevasUnidades < unidadesMinimas) {
            nuevasUnidades = unidadesMinimas;
        } else if (nuevasUnidades > stock) {
            nuevasUnidades = stock;
        }
        asignarUnidades(nuevasUnidades);
    };
    if (typeof id !== "undefined") {
        return (
            <Container className="itendetails">
                <Row className="pt-4">
                    <Col lg={4} md={6} sm={12}>
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
                    <Col lg={8} md={6} sm={12}>
                        <div className="informacion">
                            <h1>{nombre}</h1>
                            <h3>{familia}</h3>
                            <h4>
                                {descripcion1 !== undefined &&
                                    parse(descripcion1)}
                            </h4>
                            <h4>{`Precio: $${precio} / Stock: ${stock}`}</h4>
                        </div>
                        <div className="comprar p-3 border border-2 border-primary mt-4 rounded-4 d-flex align-items-center justify-content-center fs-3">
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
                                    className="boton material-symbols-outlined fs-3 bg-secondary rounded-circle text-light p-2 mx-2"
                                    onClick={() => {
                                        modificarUnidades(-1);
                                    }}
                                >
                                    remove
                                </span>
                            </OverlayTrigger>
                            {unidades}
                            <OverlayTrigger
                                key="sumarunidades"
                                placement="top"
                                overlay={
                                    <Tooltip id="sumarunidades">
                                        Sumar Unidades
                                    </Tooltip>
                                }
                            >
                                <span
                                    className="boton material-symbols-outlined fs-3 bg-secondary rounded-circle text-light p-2 mx-2"
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
                                    className="boton material-symbols-outlined fs-3 bg-secondary rounded-circle text-light p-2 mx-2"
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
                                    className="boton material-symbols-outlined fs-3 bg-secondary rounded-circle text-light p-2 mx-2"
                                    onClick={() => {
                                        agregarProducto(
                                            producto,
                                            prodIndex,
                                            unidades,
                                        );
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
                                    className="boton material-symbols-outlined fs-3 bg-secondary rounded-circle text-light p-2 mx-2"
                                    onClick={() => {
                                        quitarProducto(
                                            producto,
                                            prodIndex,
                                            unidades,
                                        );
                                    }}
                                >
                                    remove_shopping_cart
                                </span>
                            </OverlayTrigger>
                        </div>
                        <div className="masinformacion pt-4">
                            {descripcion2 !== undefined &&
                                parse(
                                    `<div className="fs-5 pt-2" data-titulo="Usos">${descripcion2}</div>`,
                                )}
                            {descripcion3 !== undefined &&
                                parse(
                                    `<div className="fs-5 pt-2" data-titulo="Características">${descripcion3}</div>`,
                                )}
                            {descripcion4 !== undefined &&
                                parse(
                                    `<div className="fs-5 pt-2" data-titulo="Ventajas">${descripcion4}</div>`,
                                )}
                            {descripcion5 !== undefined &&
                                parse(
                                    `<div className="fs-5 pt-2" data-titulo="Presentación">${descripcion5}</div>`,
                                )}
                            {descripcion6 !== undefined &&
                                parse(
                                    `<div className="fs-5 pt-2" data-titulo="Consumo">${descripcion6}</div>`,
                                )}
                            {descripcion10 !== undefined &&
                                parse(
                                    `<div className="fs-5 pt-2" data-titulo="Aplicación">${descripcion10}</div>`,
                                )}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        return (
            <Container>
                <Row className="pt-4">
                    <Col sm={12} className="d-flex justify-content-center">
                        <span className="material-symbols-outlined fs-1">
                            link_off
                        </span>
                    </Col>
                    <Col
                        sm={12}
                        className="d-flex justify-content-center pt-2 fs-3"
                    >
                        <div>EL producto que buscas no existe</div>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default ItemDetail;
