import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState, useContext } from "react";

import { ProvContextoCarro } from "../context/EstadoCarroContexto";

const CartForm = () => {
    const { carro, total } = useContext(ProvContextoCarro);

    const [nroOrden, asignarOrden] = useState(null);
    const [nombre, asignarNombre] = useState("");
    const [email, asignarEmail] = useState("");

    const db = getFirestore();
    const coleccion = collection(db, "pedidos");

    console.log (carro);

    const pedido = {
        nombre,
        email,
        productos: carro,
    };

    const envioOrden = (ev) => {
        ev.preventDefault();
        addDoc(coleccion, pedido).then(({ id }) => asignarOrden(id));
    };

    return (
        <div className="formularioPedido">
            <form onSubmit={envioOrden}>
                <input
                    type="text"
                    placeholder="Nombre"
                    onChange={(event) => {
                        asignarNombre(event.target.value);
                        console.log(event.target.value);
                    }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(event) => {
                        asignarEmail(event.target.value);
                        console.log(event.target.value);
                    }}
                />
                <input type="submit" value="Enviar" />
            </form>
            <p>{nroOrden}</p>
        </div>
    );
};

export default CartForm;
