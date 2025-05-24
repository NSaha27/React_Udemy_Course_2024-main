import "bootstrap/dist/css/bootstrap.min.css";
import style from "./css/FoodItem.module.css";

function FoodItem({ foodItem }) {
  function handleBuyBtnClick(ev) {
    console.log(ev);
    console.log(`thanks for choosing "${foodItem}"`);
  }

  return (
    <li className={`${style["food-item"]} list-group-item`}>
      <span className={`${style["food-item-title"]} float-start`}>
        {foodItem}
      </span>
      <button
        className={`${style["btn"]} float-end`}
        onClick={(ev) => handleBuyBtnClick(ev)}
      >
        Buy
      </button>
    </li>
  );
}

export default FoodItem;
