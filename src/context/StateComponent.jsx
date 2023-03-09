import { createContext, useState } from "react";

export const CounterContext = createContext();

const StateComponent = ({ childen }) => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <CounterContext.Provider value={{ counter, increment, decrement, reset }}>
      {childen}
    </CounterContext.Provider>
  );
};

export default StateComponent;
