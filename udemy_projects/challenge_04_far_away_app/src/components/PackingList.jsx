function PackingList({ itemList }) {
  return (
    <div className="packing-list">
      <div className="item-list">
        <ul>
          {itemList.map((item, indx, arr) => {
            return (
              <li className="item">
                <input
                  type="checkbox"
                  name="checkedItem"
                  id=""
                  className="checked-item"
                />
                <span className="item-num-name">
                  {item.itemNumber} {item.itemName}
                </span>
                <span className="remove-item">&nbsp</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sort-and-clear">
        <select name="sort" id="" className="rounded">
          <option value="" selected>
            Sort by input order
          </option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <button className="clear rounded" onClick={clearList}>
          Clear List
        </button>
      </div>
    </div>
  );
}

export default PackingList;
