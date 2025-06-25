import { useContext } from "react";
import Pizza from "./Pizza";
import { CartContextProvider, FavouritesContextProvider, PizzaContextProvider } from "./store/pizza-storage";

function DisplayPizzas() {
  const {pizzaList, deletePizzaFromList} = useContext(PizzaContextProvider);
  const {addToCart} = useContext(CartContextProvider);
  const {addToFavourites} = useContext(FavouritesContextProvider);
  return (
    <div className="">
      <h2 className=""></h2>
      <div className="">
        {
          pizzaList.map(pizza => {
            pizza.avgRating = 3.5;
            <Pizza pizza={pizza} deletePizzaFromList={deletePizzaFromList} addPizzaToCart={addToCart} addPizzaToFavourites={addToFavourites} userType={"customer"} />
          })
        }
      </div>
    </div>
  );
}

export default DisplayPizzas;
