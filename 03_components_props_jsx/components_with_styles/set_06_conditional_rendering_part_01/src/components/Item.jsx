import "../../public/css/style.css";

function Item({item} = props){
  return <div className="card">
    <div className="card-header">
      <img src={item.itemImg} alt={item.itemName} />
    </div>
    <div className="card-body">
      <h2 className={`item-name ${item.isSoldOut? "sold-out" : ""}`}>{item.itemName}</h2>
      <h4 className={`item-type ${item.itemType === "veg" ? "veg" : "non-veg"} ${item.isSoldOut? "sold-out" : ""}`}>{item.itemType}</h4>
      <p className={`item-description ${item.isSoldOut? "sold-out" : ""}`}>{item.itemDescription}</p>
      <h3 className={`item-price ${item.isSoldOut? "hide" : ""}`}>Rs.{item.itemPrice}/- (incl. tax)</h3>
    </div>
    <div className="card-footer">
      {
        // conditionally display a text or component
        item.isSoldOut? <h3 className={`${item.isSoldOut? "sold-out" : ""}`}>Sold Out</h3> : <a href="#order" className="btn">Order Now</a>
      }
    </div>
  </div>
}

export default Item;