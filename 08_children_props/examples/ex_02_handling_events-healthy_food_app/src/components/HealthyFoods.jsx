import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import FoodItem from "./FoodItem";

function HealthyFoods({ foodList }) {
  const [purchasedItems, setPurchasedItems] = useState([]);
  function handleBuyBtnClick(ev, food){
    const addItems = [...purchasedItems, food];
    setPurchasedItems(addItems);
  }

  return (
    <div className={`w-100`}>
      <ul className="list-group">
        {foodList.map((food, indx) => {
          return <FoodItem foodItem={food} key={indx} isPurchased={purchasedItems.includes(food)} onBuyBtnClick={(ev) => handleBuyBtnClick(ev, food)} />;
        })}
      </ul>
    </div>
  );
}

export default HealthyFoods;
