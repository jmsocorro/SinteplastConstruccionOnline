import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Ratio } from 'react-bootstrap';

const Item = ({producto}) => {
  const {id,nombre,descripcion1,familiaid,familia,tipoid,tipo,archivo} = producto;
  let rutaImagen = typeof(archivo) === "undefined" ? `https://sinteplastconstruccion.com.ar/assets/img/noimg.png` : `https://sinteplastconstruccion.com.ar/assets/img/sinteplastconstruccion.com.ar/photos/h300/${archivo}`;
  return (
    <Col lg={3} md={4} sm={6} className="d-flex align-items-strech pt-4">
      <Card className={`producto${id} w-100`}>
        <Card.Body>
          <Ratio aspectRatio="1x1">
            <div className='d-flex align-items-center'>
              <Card.Img variant="top" src={rutaImagen}/>
            </div>
          </Ratio>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion1.replace(/(<([^>]+)>)/gi,"")}</Card.Text>
            <Link to={`/producto/${nombre}`}>
              <Button variant="primary">
                Ver detalle
              </Button>
            </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Item