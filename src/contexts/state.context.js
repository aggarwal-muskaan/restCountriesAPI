import { createContext } from "react";
import useApi from "../customhook/useApi";

export const cards = createContext();
export const filterCards = createContext();

function Country({ children }) {
  const [state, changeState] = useApi([]);
  return (
    <filterCards.Provider value={changeState}>
      <cards.Provider value={state}>{children}</cards.Provider>
    </filterCards.Provider>
  );
}

export { Country };
