import { Link } from "react-router-dom";
import { Col, Card, Button, Ratio } from "react-bootstrap";
import parse from "html-react-parser";

const Item = ({ producto }) => {
    const {
        id,
        nombre,
        descripcion1,
        stock,
        precio,
        archivo,
    } = producto;
    let rutaImagen =
        typeof archivo === "undefined"
            ? `https://sinteplastconstruccion.com.ar/assets/img/noimg.png`
            : `https://sinteplastconstruccion.com.ar/assets/img/sinteplastconstruccion.com.ar/photos/h300/${archivo}`;
    return (
        <Col lg={3} md={4} sm={6} className="d-flex align-items-strech pt-4">
            <Card className={`producto${id} w-100`}>
                <Card.Body>
                    <Ratio aspectRatio="1x1">
                        <Link to={`/producto/${id}`}>
                            <div className="d-flex align-items-center">
                                <Card.Img variant="top" src={rutaImagen} />
                            </div>
                        </Link>
                    </Ratio>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text as="div" className="py-2">
                        {descripcion1 !== undefined && parse(descripcion1)}
                    </Card.Text>
                    <Card.Text
                        as="div"
                        className="py-2"
                    >{`Precio: $${precio} / Stock: ${stock}`}</Card.Text>
                    <Link to={`/producto/${id}`}>
                        <Button variant="primary">Ver detalle</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;
