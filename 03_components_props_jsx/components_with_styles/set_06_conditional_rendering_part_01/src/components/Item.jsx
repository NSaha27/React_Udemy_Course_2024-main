import "../../public/css/style.css";

function Item({item} = props){
  return <div className="card">
    <div className="card-header">
      <img src={item.itemImg} alt={item.itemName} />
    </div>
    <div className="card-body">
      <h2 className="item-name">{item.itemName}</h2>
      <h4 className="item-type">{item.itemType}</h4>
      <p className="item-description">{item.itemDescription}</p>
      <h3 className="item-price">Rs.{item.itemPrice}/- (incl. tax)</h3>
    </div>
    <div className="card-footer">
      <a href="#order" className="btn">Order Now</a>
    </div>
  </div>
}

export default Item;