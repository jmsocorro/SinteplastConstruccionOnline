import React from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import Item from "./Item";

const ItemList = ({ productosFiltrados }) => {
    const { nombre } = useParams();

    return (
        <Container>
            <Row className="itemList">
                {productosFiltrados.map((producto) => {
                    return <Item key={producto.id} producto={producto} />;
                })}
            </Row>
        </Container>
    );
};

export default React.memo(ItemList);
