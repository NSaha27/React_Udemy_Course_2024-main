import "bootstrap/dist/css/bootstrap.min.css";
import style from "./css/AddFoodItem.module.css";

function AddFoodItem({ handleSetItems }) {
  /*
    IF ADD-FOOD-ITEM IS PERFORMED IN THE FORM OF A FORM SUBMIT
    ----------------------------------------------------
  */
  /*
  const [formData, setFormData] = useState({});

  function handleFormSubmit(ev) {
    ev.preventDefault();
    handleSetItems((prevItems) => [...prevItems, formData]);
  }

  function handleItemChange(ev) {
    const { name, value } = ev.target;
    ev.target.value = "";
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
 */
  /*
    IF ADD-FOOD-ITEM IS PERFORMED IN A FORM OTHER THAN THE FORM SUBMIT
    --------------------------------------------------------
  */
  function handleOnKeyUp(e) {
    if (e.key === "Enter") {
      const { name, value } = e.target;
      e.target.value = "";
      handleSetItems((prevItems) => [
        ...prevItems,
        { [name]: value, isPurchased: false },
      ]);
    }
  }

  return (
    <div className={`${style["add-food-item"]} `}>
      {/* IN THE FORM OF A NORMAL INPUT HANDLING */}
      <input
        type="text"
        name="foodItemName"
        id="foodItemName"
        placeholder="enter food item name here..."
        onKeyUp={handleOnKeyUp}
        className="w-75 mx-auto"
      />
      {/* IN THE FORM OF A FORM SUBMIT */}
      {/*
          <form action="/add-food-item" method="post" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="foodItemName"
              id="foodItemName"
              placeholder="enter food item name here..."
              onChange={handleItemChange}
              value={formData["foodItemName"]}
            />
            <button type="submit" className={`${style["btn"]} btn-success`}>
              Add
            </button>
          </form>
        */}
    </div>
  );
}

export default AddFoodItem;
