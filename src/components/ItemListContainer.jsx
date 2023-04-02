import {
    collection,
    getDocs,
    getFirestore,
    query,
    orderBy,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";

import ItemList from "./ItemList";

const ItemListContainer = () => {
    const { categoriaId } = useParams();
    const [productosCargados, cambiarProductos] = useState([]);

    useEffect(() => {
        const bbdd = getFirestore();

        const coleccion = collection(bbdd, "productos");
        getDocs(
            query(coleccion, orderBy("familiaorden"), orderBy("nombre")),
        ).then((vista) => {
            const productos = vista.docs.map((producto) => producto.data());
            cambiarProductos(productos);
        });
    }, []);

    let productosFiltrados = productosCargados;

    if (typeof categoriaId !== "undefined") {
        productosFiltrados = productosCargados.filter((producto) => {
            return producto.familia.toLowerCase() === categoriaId.toLowerCase();
        });
    }

    // cierro el dropdown menuCategorias si esta abierto
    document.querySelector('#menuCategorias.dropdown-toggle.show.nav-link') && document.querySelector('#menuCategorias.dropdown-toggle.show.nav-link').click();
    
    if (productosFiltrados.length > 0) {
        return <ItemList productosFiltrados={productosFiltrados} />;
    } else {
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
    }
};

export default ItemListContainer;
