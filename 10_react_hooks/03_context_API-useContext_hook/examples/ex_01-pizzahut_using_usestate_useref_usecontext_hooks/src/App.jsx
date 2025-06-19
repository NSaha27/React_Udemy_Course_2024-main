import { useState } from "react";
import './App.css';
import AddPizza from './components/AddPizza';
import DisplayPizzas from './components/DisplayPizzas';
import Header from './components/Header';
import PizzaStorageContext from './components/store/pizza-storage';

function App() {
  const [pizzas, setPizzas] = useState([]);

  const appName = "Pizza Hut";
  const subTitle = "Order a delicious pizza on the go, anywhere, anytime. Pizza Hut is happy to assist you with your home delivery. Every time you order, you get a hot and fresh pizza delivered at your doorstep in less than thirty minutes.";
  
  function addPizza(newPizza){
    setPizzas(prevPizzas => {
      const updatedPizzas = [...prevPizzas, newPizza];
      return updatedPizzas;
    })
  }

  function deletePizza(index){
    setPizzas(prevPizzas => {
      const curPizzas = [...prevPizzas];
      curPizzas.splice(index, 1);
      return curPizzas;
    })
  }
  
  return (
    <>
      <PizzaStorageContext value={{pizzas, addPizza, deletePizza}}>
        <Header appName={appName} subTitle={subTitle} />
        <AddPizza />
        <DisplayPizzas />
      </PizzaStorageContext>
    </>
  )
}

export default App
