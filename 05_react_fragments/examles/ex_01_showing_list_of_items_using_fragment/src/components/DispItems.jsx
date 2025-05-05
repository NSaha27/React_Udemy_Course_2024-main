import "bootstrap/dist/css/bootstrap.min.css";

import Item from "./Item";

function DispItems({ itemList }) {
  return (
    <div className="card p-2">
      <h2 className="">Items</h2>
      <ul className="list-group">
        {itemList.map((item, indx, arr) => {
          return (
            <li
              className="list-group-item d-flex flex-row"
              style={{ minHeight: "70vh" }}
            >
              <Item key={indx} item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DispItems;
