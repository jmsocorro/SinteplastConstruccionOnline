import { useContext } from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProvContextoCarro } from "../context/EstadoCarroContexto";

const CartWidget = () => {
    // Traigo unidades totales del contexto
    const { unidadesTotales } = useContext(ProvContextoCarro);

    return (
        <Link to={`/cart`} className="cartWidget">
            <Badge bg="secondary" className="d-flex align-items-center">
                <div className="material-symbols-outlined">shopping_cart</div>
                <div className="items"> {unidadesTotales} </div>
            </Badge>
        </Link>
    );
};

export default CartWidget;
