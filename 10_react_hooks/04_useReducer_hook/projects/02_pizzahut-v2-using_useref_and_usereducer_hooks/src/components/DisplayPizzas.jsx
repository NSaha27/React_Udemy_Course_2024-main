import { useContext } from "react";
import Pizza from "./Pizza";
import { CartContextProvider, FavouritesContextProvider, PizzaContextProvider } from "./store/pizza-storage";

function DisplayPizzas() {
  const {pizzaList, deletePizzaFromList} = useContext(PizzaContextProvider);
  const addToCart = useContext(CartContextProvider);
  const addToFavourites = useContext(FavouritesContextProvider);
  return (
    <div className="">
      <h2 className="">Pizzas in trend</h2>
      <div className="">
        {
          pizzaList.length > 0 ?
          pizzaList.map(pizza => {
            pizza.avgRating = 3.5;
            <Pizza pizza={pizza} deletePizzaFromList={deletePizzaFromList} addPizzaToCart={addToCart} addPizzaToFavourites={addToFavourites} userType={"customer"} />
          })
          :
          <h2 className="">Sorry, no pizza is available right now!</h2>
        }
      </div>
    </div>
  );
}

export default DisplayPizzas;
