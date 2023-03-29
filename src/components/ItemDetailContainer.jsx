import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Container, Row, Col, Spinner } from "react-bootstrap";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { productoId } = useParams();
    const [productoCargado, cambiarProducto] = useState([]);

    useEffect(() => {
        const bbdd = getFirestore();
        const producto = doc(bbdd, "productos", `${productoId}`);
        //const producto = doc (bbdd, "productos" , '1');
        console.log(productoId);

        getDoc(producto).then((vista) => {
            if (vista.exists()){
                const prod = vista.data();
                console.log(prod);
                cambiarProducto(prod);
            }
        })
    }, []);
    
    if (productoCargado.length === 0){
        return (
            <Container>
                <Row className="pt-4">
                    <Col sm={12} className="d-flex justify-content-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Col>
                    <Col sm={12} className="d-flex justify-content-center pt-2">
                        <div>CARGANDO</div>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        return <ItemDetail producto={productoCargado} />;

    }
};

export default ItemDetailContainer;
