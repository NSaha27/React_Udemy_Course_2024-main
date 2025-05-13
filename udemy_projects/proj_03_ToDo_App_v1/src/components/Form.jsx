import { useState } from "react";
import Button from "./Button";
import style from "./css/Form.module.css";

function Form({ addTodo }) {
  const [formData, setFormData] = useState({
    name: "",
    value: "",
  });

  function handleChange(ev) {
    const name = ev.target.name;
    const value = ev.target.value;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    addTodo(formData);
  }

  return (
    <div className={style["form"]}>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={formData.value}
          className={style["input"]}
          placeholder="Enter todo here..."
          onChange={handleChange}
        />
        <input
          type="date"
          name="todoDate"
          id="todoDate"
          value={formData.value}
          className={style["input"]}
          onChange={handleChange}
        />
        <Button type={"submit"} btnBgColor={"green"} btnTitle={"Add Todo"} />
      </form>
    </div>
  );
}

export default Form;
