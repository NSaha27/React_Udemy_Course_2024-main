import {useContext, useRef} from "react";
import {PizzaContextProvider} from "./store/pizza-storage";
import css from "./css/AddPizza.module.css";

function AddPizza(){
  const {addPizza} = useContext(PizzaContextProvider);

  function handleFormSubmit(){

  }

  return <div className={css["add-pizza"]}>
    <div className={css["add-btn-container"]}>
      <button className={css["add-btn"]} onClick={hideOrDispAddPizzaForm}>Add a pizza</button>
    </div>
    <div className={css["add-form-container"]}>
      <form action="" method="post" onSubmit={handleFormSubmit}>
        <div className="">
          <div className="">
            <label htmlFor="productID" className="">Product ID</label> <br />
            <input type="text" name="productID" id="productID" className="" placeholder="enter the product ID here..." ref={} />
          </div>
          <div className="">
            <label htmlFor="pizzaName" className="">Pizza name</label> <br />
            <input type="text" name="pizzaName" id="pizzaName" className="" placeholder="enter pizza name here..." />
          </div>
          <div className="">
            <label htmlFor="pizzaType" className="">Pizza type</label> <br />
            <select name="pizzaType" id="pizzaType" className="">
              <option value="" className="" selected disabled>select an option</option>
              <option value="veg" className="">Veg</option>
              <option value="non-veg" className="">Non-veg</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="imageFileName" className="">Image file name</label> <br />
            <input type="text" name="imageFileName" id="imageFileName" className="" placeholder="enter the image file name here..." />
          </div>
          <div className="">
            <label htmlFor="price" className="">Price (Rs.)</label> <br />
            <input type="number" name="price" id="price" className="" step={0.01} placeholder="enter pizza price here..." />
          </div>
        </div>
        <div className="">
          <div className="">
            <label htmlFor="pizzaDetails" className="">Pizza details</label> <br />
            <textarea name="pizzaDetails" id="pizzaDetails" className="" rows={7} placeholder="enter pizza details here..."></textarea>
          </div>
          <div className="">
            <button type="submit" className="">Add</button>
          </div>
        </div>
      </form>
    </div>
  </div>
}

export default AddPizza;