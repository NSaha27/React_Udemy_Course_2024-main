import "bootstrap/dist/css/bootstrap.min.css";
import style from "./css/HealthyFoods.module.css";

import FoodItem from "./FoodItem";

function HealthyFoods({ foodList }) {
  return (
    <div className={`w-50 mx-auto`}>
      <ul className="list-group">
        {foodList.map((food, indx) => {
          return <FoodItem foodItem={food} key={indx} />;
        })}
      </ul>
    </div>
  );
}

export default HealthyFoods;
