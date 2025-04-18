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
            <option value="1" selected>
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
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
