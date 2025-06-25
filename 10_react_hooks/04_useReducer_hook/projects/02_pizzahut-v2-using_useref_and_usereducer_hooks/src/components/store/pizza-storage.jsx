import { createContext } from "react";

const pizzaContext = createContext({
  pizzas: [],
  addPizza: () => {},
  addToCart: () => {},
  addToFavourite: () => {},
  deletePizzaFromList: () => {},
  deletePizzaFromCart: () => {},
  
});
