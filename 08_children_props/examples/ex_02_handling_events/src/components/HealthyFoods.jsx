import "bootstrap/dist/css/bootstrap.min.css";

import FoodItem from "./FoodItem";

function HealthyFoods({ foodList }) {
  return (
    <div className={`w-100`}>
      <ul className="list-group">
        {foodList.map((food, indx) => {
          return <FoodItem foodItem={food} key={indx} />;
        })}
      </ul>
    </div>
  );
}

export default HealthyFoods;
