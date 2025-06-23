import { createContext } from "react";

const PizzaStorageContext = createContext({
  pizzas: [],
  addPizza: () => {},
  deletePizza: () => {}
});

export default PizzaStorageContext;