import { RiDeleteBin6Line } from "react-icons/ri";

import css from "./css/Todo.module.css";

function Todo({todo, onDelBtnClick}){
  return <div className={css["todo"]}>
    <div className={css["todo-group"]}>{todo.todoTitle}</div>
    <div className={css["todo-group"]}>{todo.todoDate}</div>
    <div className={css["todo-group"]}>
        <button className={css["delete-button"]} onClick={() => onDelBtnClick(todo.todoTitle)}>
          <RiDeleteBin6Line />
        </button>
    </div>
  </div>
}

export default Todo;