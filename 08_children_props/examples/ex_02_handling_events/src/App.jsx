import "./App.css";
import { useState } from "react";

import AddFoodItem from "./components/AddFoodItem";
import Container from "./components/Container";
import Header from "./components/Header";
import HealthyFoods from "./components/HealthyFoods";

function App() {
  const foodList = [
    "Dal",
    "Soyabean",
    "Milk",
    "Curd",
    "Fruits",
    "Vegetables",
    "Peenut Butter",
  ];
  const [item, setItem] = useState([...foodList]);

  return (
    <>
      <Container>
        <Header appTitle={"Healthy Food App"} />
        <AddFoodItem setItem={setItem} />
        <HealthyFoods foodList={item} />
      </Container>
    </>
  );
}

export default App;
