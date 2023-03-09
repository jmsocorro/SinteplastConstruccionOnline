import { useState } from 'react';
import { Container, OverlayTrigger } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Ratio } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';

const ItemDetail = ({producto}) => {
    if (producto.length > 0){
        const {id,nombre,descripcion1,familiaid,familia,tipoid,tipo,stock,precio,archivo} = producto[0];
        let rutaImagen = typeof(archivo) === "undefined" ? `https://sinteplastconstruccion.com.ar/assets/img/noimg.png` : `https://sinteplastconstruccion.com.ar/assets/img/sinteplastconstruccion.com.ar/photos/h300/${archivo}`;
        
        const [unidades, setUnidades] = useState(1);

        const modificarUnidades = (modificacion) => {
            let unidadesMinimas = 1;
            let nuevasUnidades = modificacion === 0 ? modificacion : unidades+modificacion;
            if (nuevasUnidades < unidadesMinimas) {
                nuevasUnidades = unidadesMinimas;
            } else if (nuevasUnidades > stock ) {
                nuevasUnidades = stock;
            }
            setUnidades(nuevasUnidades);
        }
        
        
        return (
            <Container className='itendetails'>
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
                        <div className='informacion'>
                            <h1>{nombre}</h1>
                            <h3>{familia}</h3>
                            <h4>{descripcion1.replace(/(<([^>]+)>)/gi,"")}</h4>
                            <h4>{`Precio: $${precio} / Stock: ${stock}`}</h4>
                        </div>
                        <div className='comprar p-3 border border-2 border-primary mt-4 rounded-4 d-flex align-items-center justify-content-center fs-3'>
                            <OverlayTrigger key='quitarunidades' placement='top' overlay={
                                <Tooltip id='quitarunidades'>Quitar Unidades</Tooltip>
                            }>
                                <span className='boton material-symbols-outlined fs-3 bg-secondary rounded-circle text-light p-2 mx-2' onClick={()=>{modificarUnidades(-1)}}>remove</span>
                            </OverlayTrigger>
                            {unidades} 
                            <OverlayTrigger key='sumarunidades' placement='top' overlay={
                                <Tooltip id='sumarunidades'>Sumar Unidades</Tooltip>
                            }>
                                <span className='boton material-symbols-outlined fs-3 bg-secondary rounded-circle text-light p-2 mx-2' onClick={()=>{modificarUnidades(1)}}>add</span>
                            </OverlayTrigger>
                            <OverlayTrigger key='resetearunidades' placement='top' overlay={
                                <Tooltip id='resetearunidades'>Resetear Unidades</Tooltip>
                            }>
                                <span className='boton material-symbols-outlined fs-3 bg-secondary rounded-circle text-light p-2 mx-2' onClick={()=>{modificarUnidades(0)}}>close</span>
                            </OverlayTrigger>
                            <OverlayTrigger key='agregaralcarrito' placement='top' overlay={
                                <Tooltip id='agregaralcarrito'>Agregar al carrito</Tooltip>
                            }>
                                <span className='boton material-symbols-outlined fs-3 bg-secondary rounded-circle text-light p-2 mx-2' onClick={()=>{console.log('Agregar al carrito')}}>add_shopping_cart</span>
                            </OverlayTrigger>
                            <OverlayTrigger key='quitardelcarrito' placement='top' overlay={
                                <Tooltip id='quitardelcarrito'>Quitar del carrito</Tooltip>
                            }>
                                <span className='boton material-symbols-outlined fs-3 bg-secondary rounded-circle text-light p-2 mx-2' onClick={()=>{console.log('Quitar del carrito')}}>remove_shopping_cart</span>
                            </OverlayTrigger>
                        </div>

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