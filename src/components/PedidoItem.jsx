import {
    Col,
    Row,
    Figure,
    Ratio,
} from "react-bootstrap";

const PedidoItem = () => {
    // traigo el producto por props
    const { id, nombre, precio, archivo, unidades } = producto;
    let rutaImagen =
        typeof archivo === "undefined"
            ? `https://sinteplastconstruccion.com.ar/assets/img/noimg.png`
            : `https://sinteplastconstruccion.com.ar/assets/img/sinteplastconstruccion.com.ar/photos/h300/${archivo}`;

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
                    <div className="d-inline-block p-2 fs-4">
                        {unidades}
                    </div>
                </div>
            </Col>
            <Col
                lg={2}
                md={2}
                sm={6}
                className="d-flex align-items-center justify-content-center "
            >
                <h3>{`$${precio * unidades}`}</h3>
            </Col>
        </Row>
    );
};

export default PedidoItem;
