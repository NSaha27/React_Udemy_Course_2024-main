import "bootstrap/dist/css/bootstrap.min.css";
import style from "./css/FoodItem.module.css";

function FoodItem({ foodItem, isPurchased, onBuyBtnClick }) {
  return (
    <li
      className={`${style["food-item"]} list-group-item`}
      style={isPurchased ? { backgroundColor: "beige" } : {}}
    >
      <span className={`${style["food-item-title"]} float-start`}>
        {foodItem.foodItemName}
      </span>
      <button
        className={`btn ${
          isPurchased ? "btn-danger" : "btn-success"
        } float-end`}
        onClick={onBuyBtnClick}
      >
        {isPurchased ? "Remove" : "Buy"}
      </button>
    </li>
  );
}

export default FoodItem;
