import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Ratio } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';

const ItemDetail = ({producto}) => {
    if (producto.length > 0){
        const {id,nombre,descripcion1,familiaid,familia,tipoid,tipo,archivo} = producto[0];
        let rutaImagen = typeof(archivo) === "undefined" ? `https://sinteplastconstruccion.com.ar/assets/img/noimg.png` : `https://sinteplastconstruccion.com.ar/assets/img/sinteplastconstruccion.com.ar/photos/h300/${archivo}`;
        return (
            <Container>
                <Row className="pt-4">
                     <Col lg={4} md={6} sm={12}>
                        <Ratio aspectRatio="1x1">
                            <div className='d-flex align-items-center'>
                                <Figure>
                                    <Figure.Image
                                        src={rutaImagen}
                                        width='100%'
                                        height='100%'
                                        alt={nombre}
                                    />
                                </Figure>
                            </div>
                        </Ratio>
                     </Col>
                     <Col lg={8} md={6} sm={12}>
                        <h1>{nombre}</h1>
                        <h3>{familia}</h3>
                        <h4>{descripcion1.replace(/(<([^>]+)>)/gi,"")}</h4>

                     </Col>                     
                </Row>
            </Container>
        )
    } else {
        return (
            <Container>
                <Row className="pt-4">
                    <Col sm={12}>
                        <h1 className="text-center">Cargando...</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ItemDetail