import { MdDeleteForever } from "react-icons/md";
import css from "./css/Pizza.module.css";

function Pizza({pizza, onDelBtnClick}){
  return <div className={css["pizza"]}>
    <div className="">
      <img src={`images/${pizza.pImageFilename}`} alt={pizza.pName} className={css["pizza-image"]} />
    </div>
    <div className={css["pizza-details"]}>
      <h3 className="pizza-name">{pizza.pName}</h3>
      <h5 className="pizza-type">{pizza.pType}</h5>
      <p className="pizza-details">{pizza.pDetails}</p>
      <h4 className="pizza-price">Rs.{pizza.pPrice}/-</h4>
    </div>
    <div className={css["btn-div"]}>
      <button className={css["del-btn"]} onClick={onDelBtnClick}>
        <MdDeleteForever />
      </button>
    </div>
  </div>
}

export default Pizza;