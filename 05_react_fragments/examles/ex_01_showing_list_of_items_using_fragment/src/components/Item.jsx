import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function Item({ item }) {
  return (
    <React.Fragment className="row">
      <img
        src={`images/${item.imageUrl}`}
        alt={item.name}
        className="col-4 img-thumbnail rounded"
      />
      <div className="py-2 px-3 col-6">
        <h2 className="h2">{item.name}</h2>
        <p className="">{item.description}</p>
        <p className="text-success lead">{item.type}</p>
        <h3 className="h3">
          At just{" "}
          <span className="text-danger">Rs.{item.price.toFixed(2)}/-</span> only
        </h3>
      </div>
      <div className="py-2 px-3 col-2 text-center">
        <form action="/order" method="post">
          <input type="hidden" name="itemID" value={item.id} />
          <button type="submit" className="btn btn-warning">
            Order
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Item;
