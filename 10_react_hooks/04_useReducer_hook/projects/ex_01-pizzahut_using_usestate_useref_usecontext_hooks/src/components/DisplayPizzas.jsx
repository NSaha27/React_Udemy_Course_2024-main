import { useContext } from "react";

import css from "./css/DisplayPizza.module.css";
import Pizza from "./Pizza";
import PizzaStorageContext from "./store/pizza-storage";

function DisplayPizzas(){
  const {pizzas, deletePizza} = useContext(PizzaStorageContext);

  return <div className={css["display-pizzas"]}>
    {
      pizzas.length > 0 ?
      <div className={css["pizza-list"]}>
        {
          pizzas.map((pizza, indx) => {
            return <Pizza pizza={pizza} key={indx} onDelBtnClick={() => deletePizza(indx)} />
          })
        }
      </div>
      :
      <h2 className="">no pizza is available now!</h2>
    }
  </div>
}

export default DisplayPizzas;