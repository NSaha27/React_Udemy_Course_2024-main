import { useContext, useRef, useState } from "react";
import css from "./css/AddPizza.module.css";
import { PizzaContextProvider } from "./store/pizza-storage";

function AddPizza(){
  const [displayAddPizzaForm, setDisplayAddPizzaForm] = useState(false);

  // input references
  const prodIDRef = useRef(null);
  const pizzaNameRef = useRef(null);
  const pizzaTypeRef = useRef(null);
  const imgFileNameRef = useRef(null);
  const pizzaPriceRef = useRef(null);
  const pizzaDetailsRef = useRef(null);

  const addPizza = useContext(PizzaContextProvider);

  function hideOrDispAddPizzaForm(){
    setDisplayAddPizzaForm(!displayAddPizzaForm);
  }

  function handleFormSubmit(ev){
    ev.preventDefault();

    const currProdID = prodIDRef.current.value;
    const currPizzaName = pizzaNameRef.current.value;
    const currPizzaType = pizzaTypeRef.current.value;
    const currImgFileName = imgFileNameRef.current.value;
    const currPizzaPrice = pizzaPriceRef.current.value;
    const currPizzaDetails = pizzaDetailsRef.current.value;

    addPizza(currProdID, currPizzaName, currPizzaType, currImgFileName, currPizzaPrice, currPizzaDetails);
  }

  return <div className={css["add-pizza"]}>
    <div className={css["add-btn-container"]}>
      <button className={css["add-btn"]} onClick={hideOrDispAddPizzaForm}>Add a pizza</button>
    </div>
    <div className={css["add-form-container"]} style={{display: displayAddPizzaForm ? "block" : "none"}}>
      <form action="" method="post" onSubmit={handleFormSubmit}>
        <div className="">
          <div className="">
            <label htmlFor="productID" className="">Product ID</label> <br />
            <input type="text" name="productID" id="productID" className="" placeholder="enter the product ID here..." ref={prodIDRef} />
          </div>
          <div className="">
            <label htmlFor="pizzaName" className="">Pizza name</label> <br />
            <input type="text" name="pizzaName" id="pizzaName" className="" placeholder="enter pizza name here..." ref={pizzaNameRef} />
          </div>
          <div className="">
            <label htmlFor="pizzaType" className="">Pizza type</label> <br />
            <select name="pizzaType" id="pizzaType" className="" ref={pizzaTypeRef} >
              <option value="veg" className="">Veg</option>
              <option value="non-veg" className="">Non-veg</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="imageFileName" className="">Image file name</label> <br />
            <input type="text" name="imageFileName" id="imageFileName" className="" placeholder="enter the image file name here..." ref={imgFileNameRef} />
          </div>
          <div className="">
            <label htmlFor="price" className="">Price (Rs.)</label> <br />
            <input type="number" name="price" id="price" className="" step={0.01} placeholder="enter pizza price here..." ref={pizzaPriceRef} />
          </div>
        </div>
        <div className="">
          <div className="">
            <label htmlFor="pizzaDetails" className="">Pizza details</label> <br />
            <textarea name="pizzaDetails" id="pizzaDetails" className="" rows={7} placeholder="enter pizza details here..." ref={pizzaDetailsRef} ></textarea>
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