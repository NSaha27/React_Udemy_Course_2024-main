import { useContext, useState } from "react";
import css from "./css/AddPizza.module.css";
import PizzaStorageContext from "./store/pizza-storage";

function AddPizza(){
  const {pizzas, addPizza} = useContext(PizzaStorageContext);
  const [formData, setFormData] = useState({});
  const [displayForm, setDisplayForm] = useState(false);

  function handleDataChange(event){
    const {name, value} = event.target;
    setFormData(curFormData => {
      const newFormData = {...curFormData, [name]: value};
      return newFormData;
    });
  }

  function handleFormSubmit(event){
    event.preventDefault();
    const isPizzaAlreadyPresent = pizzas.includes(formData);
    if(!isPizzaAlreadyPresent){
      addPizza(formData);
      setFormData({});
    }
  }

  function displayAddPizzaForm(){
    setDisplayForm(!displayForm);
  }

  return <div className={css["add-pizza"]}>
    <button className={css["add-pizza-btn"]} onClick={displayAddPizzaForm}>Add new pizza</button>
    <div className={css["add-pizza-div"]} style={{display: displayForm ? "block" : "none", transition: "0.7s"}}>
      <p className="">Enter the following details:</p>
      <div>
        <form action="" method="post" onSubmit={handleFormSubmit}>
          <div className={css["form-group"]}>
            <label htmlFor="pName" className={css["form-label"]}>Pizza name</label> <br />
            <input type="text" name="pName" id="pName" className={css["form-control"]} onChange={handleDataChange} />
          </div>
          <div className={css["form-group"]}>
            <label htmlFor="pType" className={css["form-label"]}>Type</label> <br />
            <input type="radio" name="pType" id="pType" className="form-control" value={"veg"} onChange={handleDataChange} /> Veg 
            <input type="radio" name="pType" id="pType" className="form-control" value={"non-veg"} onChange={handleDataChange} /> Non-veg 
          </div>
          <div className={css["form-group"]}>
            <label htmlFor="pDetails" className={css["form-label"]}>More details</label> <br />
            <textarea name="pDetails" id="pDetails" className={css["form-control"]} onChange={handleDataChange} rows={8}></textarea>
          </div>
          <div className={css["form-group"]}>
            <label htmlFor="pPrice" className={css["form-label"]}>Price (INR)</label> <br />
            <input type="number" name="pPrice" id="pPrice" step={0.01} className={css["form-control"]} onChange={handleDataChange} />
          </div>
          <div className={css["form-group"]}>
            <label htmlFor="pImageFilename" className={css["form-label"]}>Image filename</label> <br />
            <input type="text" name="pImageFilename" id="pImageFilename" className={css["form-control"]} onChange={handleDataChange} />
          </div>
          <div className={css["form-group"]}>
            <button type="submit" className={css["add-pizza-btn"]}>Add</button>
          </div>
        </form>
      </div>
    </div>
  </div>
}

export default AddPizza;