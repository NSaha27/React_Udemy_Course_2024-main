import { useState } from "react";
import "./App.css";

import AddFoodItem from "./components/AddFoodItem";
import Container from "./components/Container";
import ErrorHandler from "./components/ErrorHandler";
import Header from "./components/Header";
import HealthyFoods from "./components/HealthyFoods";

function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      <Container>
        <Header appTitle={"Healthy Food App"} />
        <AddFoodItem handleSetItems={setItems} />
        {items.length > 0 ? null : <ErrorHandler />}
        <HealthyFoods foodList={items} />
      </Container>
    </>
  );
}

export default App;
