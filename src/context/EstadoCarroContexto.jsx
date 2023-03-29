import { createContext, useState } from "react";

export const ProvContextoCarro = createContext(null);

const EstadoCarroContexto = ({ children }) => {
    const [carro, modificarCarro] = useState([]);
    const [unidadesTotales, calcularUnidades] = useState(carro.length);
    const [total, calcularTotal] = useState(
        carro.reduce((accumulator, producto) => {
            return accumulator + producto.unidades * producto.precio;
        }, 0),
    );
    const [estadoPedido, asignarEstado] = useState (0);

    const agregarProducto = (prod, prodIndex, unidades) => {
        console.log(prod, prodIndex, unidades);
        const {
            id,
            nombre,
            descripcion1,
            familiaid,
            familia,
            tipoid,
            tipo,
            stock,
            precio,
            archivo,
        } = prod;
        if (prodIndex !== -1) {
            carro[prodIndex].unidades = unidades;
        } else {
            carro.push({
                id: id,
                nombre: nombre,
                descripcion1: descripcion1,
                stock: stock,
                precio: precio,
                archivo: archivo,
                unidades: unidades,
            });
            prodIndex = carro.length - 1;
        }
        modificarCarro(carro);
        calcularUnidades(
            carro.reduce((accumulator, producto) => {
                return accumulator + producto.unidades;
            }, 0),
        );
        calcularTotal(
            carro.reduce((accumulator, producto) => {
                return accumulator + producto.unidades * producto.precio;
            }, 0),
        );
    };

    const quitarProducto = (prod, prodIndex) => {
        const {
            id,
            nombre,
            descripcion1,
            familiaid,
            familia,
            tipoid,
            tipo,
            stock,
            precio,
            archivo,
        } = prod;
        if (prodIndex !== -1) {
            carro.splice(prodIndex, 1);
        } else {
            console.log(
                `El producto ${nombre} no se encuentra en el carro de compras`,
            );
        }
        modificarCarro(carro);
        calcularUnidades(
            carro.reduce((accumulator, producto) => {
                return accumulator + producto.unidades;
            }, 0),
        );
    };

    return (
        <ProvContextoCarro.Provider
            value={{
                carro,
                unidadesTotales,
                total,
                estadoPedido,
                agregarProducto,
                quitarProducto,
                asignarEstado,
            }}
        >
            {children}
        </ProvContextoCarro.Provider>
    );
};

export default EstadoCarroContexto;
