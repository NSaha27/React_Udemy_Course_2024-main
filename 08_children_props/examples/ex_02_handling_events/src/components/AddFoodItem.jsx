import "bootstrap/dist/css/bootstrap.min.css";
import style from "./css/AddFoodItem.module.css";

import { useState } from "react";

function AddFoodItem({ setItem }) {
  const [formData, setFormData] = useState({});

  function handleFormSubmit(ev) {
    ev.preventDefault();
    // foodItemList.push(formData["foodItemName"]);
    setItem((prevItems) => [...prevItems, formData["foodItemName"]]);
  }

  function handleItemChange(ev) {
    const { name, value } = ev.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className={`${style["add-food-item"]} `}>
      <form
        action="/add-food-item"
        method="post"
        onSubmit={(ev) => handleFormSubmit(ev)}
      >
        <input
          type="text"
          name="foodItemName"
          id="foodItemName"
          placeholder="enter food item name here..."
          onChange={(ev) => handleItemChange(ev)}
          value={formData["foodItemName"]}
        />
        <button type="submit" className={`${style["btn"]} btn-success`}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddFoodItem;
