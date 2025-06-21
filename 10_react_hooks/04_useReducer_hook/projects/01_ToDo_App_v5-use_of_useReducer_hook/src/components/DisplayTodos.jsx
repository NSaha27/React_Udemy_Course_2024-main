import { useContext } from "react";
import css from "./css/DisplayTodos.module.css";
import TodoItemContext from "./store/todo-item-storage";
import Todo from "./Todo";

function DisplayTodos(){
  const {todoList} = useContext(TodoItemContext);
  return <div className={css["display-todos"]}>
    {
      todoList.length === 0 ? <div className={css["no-todo-msg"]}>no todo is created yet!</div> :
      todoList.map((todo, indx) => {
        return <Todo todo={todo} key={indx} />
      })
    }
  </div>
}

export default DisplayTodos;