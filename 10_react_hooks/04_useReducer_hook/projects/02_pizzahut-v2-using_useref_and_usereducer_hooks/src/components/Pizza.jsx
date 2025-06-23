function Pizza({pizza, userType}){
  return <div className="">
    <img src={`images/${pizza.imageFileName}`} alt={pizza.pizzaName} className="" />
    <div className="">
      <h3 className="">{pizza.pizzaName}</h3>
      <h5 className="">{pizza.pizzaType}</h5>
      <p className="">{pizza.pizzaDetails}</p>
      <p className="">Avg. rating : ✨ {pizza.avgRating}</p>
      <h4 className="">{pizza.price}</h4>
    </div>
    <div className="">
      {
        userType === "customer" &&
        <div className="">
          <button className="" onClick={() => addPizzaToCart(pizza.id)}>Add to cart</button>
          <button className="" onClick={() => addPizzaToFavourite(pizza.id)}>Add to favourites</button>
        </div>
      }
      {
        userType === "seller" &&
        <div className="">
          <a href="#" className="">Edit</a>
          <button className="" onClick={() => deletePizza(pizza.id)}>Delete</button>
        </div>
      }
    </div>
  </div>
}

export default Pizza;