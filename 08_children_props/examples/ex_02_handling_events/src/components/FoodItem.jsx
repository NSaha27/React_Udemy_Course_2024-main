import "bootstrap/dist/css/bootstrap.min.css";
import style from "./css/FoodItem.module.css";

function FoodItem({ foodItem, handleBuyBtnClick }) {
  return (
    <li className={`${style["food-item"]} list-group-item`}>
      <span className={`${style["food-item-title"]} float-start`}>
        {foodItem}
      </span>
      <button
        className={`${style["btn"]} float-end`}
        onClick={handleBuyBtnClick}
      >
        Buy
      </button>
    </li>
  );
}

export default FoodItem;
