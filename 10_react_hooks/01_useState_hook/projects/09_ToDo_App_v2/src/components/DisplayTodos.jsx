import css from "./css/DisplayTodos.module.css";
import Todo from "./Todo";

function DisplayTodos({todoList, onDelBtnClick}){

  return <div className={css["display-todos"]}>
    {
      todoList.length === 0 ? <div className={css["no-todo-msg"]}>no todo is created yet!</div> :
      todoList.map((todo, indx) => {
        return <Todo todo={todo} key={indx} onDelBtnClick={onDelBtnClick} />
      })
    }
  </div>
}

export default DisplayTodos;