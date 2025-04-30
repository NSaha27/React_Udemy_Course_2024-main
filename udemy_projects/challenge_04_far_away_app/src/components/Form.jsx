import { useState } from "react";

import "./style.css";

function Form() {
  const [items, setItems] = useState([]);
  const [inputs, setInputs] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    alert(inputs.itemName);
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  return (
    <div className="form">
      <span className="form-title">What do you need for your trip?</span>
      <span className="">
        <form action="" method="post" onSubmit={handleSubmit}>
          <select
            name="numOfItems"
            id=""
            className="num-of-items"
            value={inputs.numOfItems || "0"}
            onChange={handleChange}
          >
            {
              Array.from({length: 20}, (_, i) => i + 1).map((num) => {<option value={num}>{num}</option>})
            }
          </select>
          <input
            type="text"
            name="itemName"
            id=""
            className=""
            value={inputs.itemName || ""}
            onChange={handleChange}
          />
          <button type="submit" className="btn">
            ADD
          </button>
        </form>
      </span>
    </div>
  );
}

export default Form;
