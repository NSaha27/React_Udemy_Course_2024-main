function Item(props) {
  return (
    <div className="item">
      <img
        src={"images/" + props.itemObj.itemImage}
        alt={props.itemObj.itemName}
        className="item-image"
      />
      <div className="item-details">
        <h3>{props.itemObj.itemName}</h3>
        <p>{props.itemObj.itemInfo}</p>
        <h6
          style={{
            color: props.itemObj.itemCategory === "veg" ? "green" : "maroon",
          }}
        >
          ( {props.itemObj.itemCategory} )
        </h6>
        <h3>Rs.{props.itemObj.itemPrice.toFixed(2)}/-</h3>
        {props.itemObj.isSoldOut ? (
          <h4>Sold out</h4>
        ) : (
          <>
            {props.isLoggedIn ? (
              <form action="/cart" method="post">
                <input
                  type="hidden"
                  name="itemID"
                  value={props.itemObj.itemID}
                />
                <button type="submit" className="btn btn-warning">
                  Add to Cart
                </button>
              </form>
            ) : (
              <a href="/customer-login" className="btn btn-warning">
                Add to Cart
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Item;
