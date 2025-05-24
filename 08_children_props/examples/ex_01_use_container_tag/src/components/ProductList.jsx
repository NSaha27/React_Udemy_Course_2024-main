import Card from "./Card";

import style from "./ProductList.module.css";

function ProductList({ productList }) {
  return (
    <ul className={style["product-list"]}>
      {productList.map((prod, indx) => {
        return (
          <li className={style["list-item"]} key={indx}>
            <Card>
              <img
                src={prod.imgUrl}
                alt={prod.name}
                className={style["product-image"]}
              />
              <div className={style["product-details"]}>
                <h2>{prod.name}</h2>
                <h4>{prod.type}</h4>
                {prod.description.map((prodDesk, indx2) => {
                  return (
                    <p key={indx2}>{prodDesk.length > 0 ? prodDesk : "-"}</p>
                  );
                })}
                <h2>Rs.{prod.price}/- only</h2>
              </div>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;
