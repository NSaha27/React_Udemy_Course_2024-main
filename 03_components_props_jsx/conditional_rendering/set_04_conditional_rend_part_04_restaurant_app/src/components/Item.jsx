function Item({ itemObj, isLoggedIn }) {
  return (
    <div className="item">
      <img
        src={"images/" + itemObj.itemImage}
        alt={itemObj.itemName}
        className="item-image"
      />
      <div className="item-details">
        <h3>{itemObj.itemName}</h3>
        <p>{itemObj.itemInfo}</p>
        <h6
          style={{
            color: itemObj.itemCategory === "veg" ? "green" : "maroon",
          }}
        >
          ( {itemObj.itemCategory} )
        </h6>
        <h3>Rs.{itemObj.itemPrice.toFixed(2)}/-</h3>
        {itemObj.isSoldOut ? (
          <h4>Sold out</h4>
        ) : (
          <>
            {isLoggedIn ? (
              <form action="/cart" method="post">
                <input type="hidden" name="itemID" value={itemObj.itemID} />
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
