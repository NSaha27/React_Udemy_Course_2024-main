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

function Pizza() {
  return (
    <div
      className="pizzas"
      style={{
        display: "grid",
        gridTemplateColumns: "50% 50%",
      }}
    >
      {pizzaData.map((pizza, indx) => {
        return (
          <div
            className="pizza"
            key={indx}
            style={{
              padding: "2rem",
              display: "grid",
              gridTemplateColumns: "20% 80%",
            }}
          >
            <div
              id="pizzaImg"
              style={pizza.soldOut ? { opacity: "0.6" } : { opacity: "1" }}
            >
              <img
                src={pizza.photoName}
                alt={pizza.name}
                style={{
                  maxWidth: "100%",
                  // height: "100%",
                  // aspectRation: "1",
                  // alignSelf: "start",
                }}
              />
            </div>
            <div id="pizzaDetails" style={{ paddingLeft: "1rem" }}>
              <h2 style={{ margin: "0 0 1rem 0" }}>{pizza.name}</h2>
              <p style={{ margin: "0 0 0.5rem 0" }}>
                Ingredients : {pizza.ingredients}
              </p>
              <h3 style={{ margin: "0 0 0.5rem 0" }}>
                ${pizza.price.toFixed(2)}/-
              </h3>
              {pizza.soldOut ? (
                <h4 style={{ margin: "0" }}>Sold out</h4>
              ) : (
                <button style={{ cursor: "pointer" }}>Buy now</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Pizza;
