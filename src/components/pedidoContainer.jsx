import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Container, Row, Col, Spinner } from "react-bootstrap";

import Pedido from "./Pedido";


const PedidoContainer = () => {
    const { pedidoId } = useParams();
    const [pedidoCargado, asignarPedido] = useState([]);

    useEffect(() => {
        const bbdd = getFirestore();
        const pedido = doc(bbdd, "pedidos", `${pedidoId}`);
        console.log(pedidoId);

        getDoc(pedido).then((vista) => {
            if (vista.exists()){
                const ped = vista.data();
                console.log(ped);
                asignarPedido(ped);
            }
        })
    }, []);

    if (pedidoCargado.length === 0){
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
        return <Pedido pedido={pedidoCargado} />;

    }
}

export default PedidoContainer