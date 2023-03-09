import { createContext, useState } from "react";

export const CartContext = createContext(null); // Creo el contexto

const StateCartContext = ({ children }) => { // lo asigno a los hijos
  const [cartDetails, setCart] = useState([]); // vinculo las cariables al usestate
  const dominio = "sinteplast";
  return (
    <CartContext.Provider value={{ cartDetails, setCart, dominio } /* vinculo los objetos a pasar*/ }>
      {children /* vinculo los hijos*/}
    </CartContext.Provider>
  );
};

export default StateCartContext;
