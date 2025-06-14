import { useRef } from "react";
import { GrAdd } from "react-icons/gr";
import css from "./css/AddTodo.module.css";

function AddTodo({setTodoList}){
  const todoTitleElement = useRef();
  const todoDateElement = useRef();

  function handleFormSubmit(ev){
    ev.preventDefault();
    const todoTitle = todoTitleElement.current.value;
    const todoDate = todoDateElement.current.value;
    setTodoList(prevTodos => {
      const updatedTodoList = [...prevTodos, {todoTitle, todoDate}];
      return updatedTodoList;
    })
  }

  return <div className={css["add-todo"]}>
    <form action="/add-todo" method="post" onSubmit={handleFormSubmit}>
      <div className={css["form-group"]}>
        <input type="text" name="todoTitle" id="todoTitle" className={css["form-control"]} ref={todoTitleElement}  placeholder="enter todo here..." />
      </div>
      <div className={css["form-group"]}>
        <input type="date" name="todoDate" id="todoDate" className={css["form-control"]} ref={todoDateElement} />
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