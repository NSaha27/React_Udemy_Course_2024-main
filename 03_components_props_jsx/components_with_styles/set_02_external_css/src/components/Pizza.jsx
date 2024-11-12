import "./style.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Pizza(){
  return <main>
    <h2 className="menu">Our Menu</h2>
    <div className="pizzas">
      {
        pizzaData.map((pizza, indx) => {
          return <div className="pizza" key={indx}>
            <div className="pizzaImage">
              <img src={pizza.photoName} alt={pizza.name} />
            </div>
            <div className="pizzaDetails">
              <h2 className="title">{pizza.name}</h2>
              <p className="ingredients">Ingredients : {pizza.ingredients}</p>
              <h3 className="price">{pizza.price.toFixed(2)}</h3>
              {pizza.soldOut? <p className="sold-out">Sold Out</p> : <button className="btn">Buy now</button>}
            </div>
          </div>
        })
      }
    </div>
  </main>
}

export default Pizza;