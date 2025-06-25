import { createContext, useReducer } from "react";

// create different contexts
const PizzaContext = createContext({
  pizzaList: [],
  addPizza: () => {},
  deletePizzaFromList: () => {},
});

const CartContext = createContext({
  cartList: [],
  addToCart: () => {},
  removeFromCart: () => {}
});

const FavouritesContext = createContext({
  favouritesList: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {}
})

// create different reducer functions
function pizzaReducer({currPizzaList, action}){
  let newPizzaList = currPizzaList;
  switch(action.type){
    case "ADD_PIZZA":
      newPizzaList = [...currPizzaList, action.payload];
      break;
    case "DELETE_PIZZA_FROM_LIST":
      newPizzaList = currPizzaList.filter(pizza => pizza.productID !== action.payload.productID);
      break;
    default:
      throw new Error("***invalid action!");
  }
  return newPizzaList;
}

function cartReducer({currCartList, action}){
  let newCartList = currCartList;
  switch(action.type){
    case "ADD_TO_CART":
      newCartList = [...currCartList, action.payload.productID];
      break;
    case "REMOVE_PIZZA_FROM_CART":
      newCartList = currCartList.filter(prodID => prodID !== action.payload.productID);
      break;
    default:
      throw new Error("***invalid action!");
  }
  return newCartList;
}

function favReducer({currFavList, action}){
  let newFavList = currFavList;
  switch(action.type){
    case "ADD_TO_FAVOURITES":
      newFavList = [...currFavList, action.payload.productID];
      break;
    case "REMOVE_PIZZA_FROM_FAVOURITES":
      newFavList = currFavList.filter(prodID => prodID !== action.payload.productID);
      break;
    default:
      throw new Error("***invalid action!");
  }
  return newFavList;
}

// create different context provider functions
function PizzaContextProvider({children}){
  const [pizzaList, pizzaDispatcher] = useReducer(pizzaReducer, []);

  function addPizza(productID, pizzaName, pizzaType, imageFileName, price, pizzaDetails){
    const addPizzaAction = {
      type: "ADD_PIZZA",
      payload: {
        productID,
        pizzaName,
        pizzaType,
        imageFileName,
        price,
        pizzaDetails
      }
    };
    pizzaDispatcher(addPizzaAction);
  }

  function deletePizzaFromList(productID){
    const deletePizzaFromListAction = {
      type: "DELETE_PIZZA_FROM_LIST",
      payload: {productID}
    };
    pizzaDispatcher(deletePizzaFromListAction);
  }

  return <PizzaContext.Provider value={{pizzaList, addPizza, deletePizzaFromList}}>
    {children}
  </PizzaContext.Provider>
}

function CartContextProvider({children}){
  const [cartList, cartDispatcher] = useReducer(cartReducer, []);

  function addToCart(productID){
    const addToCartAction = {
      type: "ADD_TO_CART",
      payload: {productID}
    }
    cartDispatcher(addToCartAction);
  }

  function removePizzaFromCart(productID){
    const removePizzaFromCartAction = {
      type: "REMOVE_PIZZA_FROM_CART",
      payload: {productID}
    };
    cartDispatcher(removePizzaFromCartAction);
  }

  return <CartContext.Provider value={{cartList, addToCart, removePizzaFromCart}}>
    {children}
  </CartContext.Provider>
}

function FavouritesContextProvider({children}){
  const [favouritesList, favDispatcher] = useReducer(favReducer, []);

  function addToFavourites(productID){
    const addToFavouritesAction = {
      type: "ADD_TO_FAVOURITES",
      payload: {productID}
    }
    favDispatcher(addToFavouritesAction);
  }

  function removePizzaFromFavourites(productID){
    const removePizzaFromFavouritesAction = {
      type: "REMOVE_PIZZA_FROM_FAVOURITES",
      payload: {productID}
    };
    favDispatcher(removePizzaFromFavouritesAction);
  }

  return <FavouritesContext.Provider value={{favouritesList, addToFavourites, removePizzaFromFavourites}}>
    {children}
  </FavouritesContext.Provider>
}

export { CartContextProvider, FavouritesContextProvider, PizzaContextProvider };

