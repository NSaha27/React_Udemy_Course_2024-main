import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import css from "./css/AddTodo.module.css";

function AddTodo({setTodoList}){
  const [formData, setFormData] = useState({});

  function handleInputChange(ev){
    const {name, value} = ev.target;
    setFormData(otherData => {
      const newData = {...otherData, [name]: value};
      return newData;
    })
  }

  function handleFormSubmit(ev){
    ev.preventDefault();
    setTodoList(prevTodos => {
      const updatedTodoList = [...prevTodos, formData];
      return updatedTodoList;
    })
  }

  return <div className={css["add-todo"]}>
    <form action="/add-todo" method="post" onSubmit={handleFormSubmit}>
      <div className={css["form-group"]}>
        <input type="text" name="todoTitle" id="todoTitle" className={css["form-control"]} value={formData.todoTitle} onChange={handleInputChange} placeholder="enter todo here..." />
      </div>
      <div className={css["form-group"]}>
        <input type="date" name="todoDate" id="todoDate" className={css["form-control"]} value={formData.todoDate} onChange={handleInputChange} />
      </div>
      <div className={css["form-group"]}>
        <button type="submit" className={css["add-button"]}>
          <GrAdd />
        </button>
      </div>
    </form>
  </div>
}

export default AddTodo;