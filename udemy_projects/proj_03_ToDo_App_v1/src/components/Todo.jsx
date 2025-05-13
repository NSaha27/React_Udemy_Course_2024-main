import Button from "./Button";
import style from "./css/Todo.module.css";

function Todo({ todoList }) {
  return (
    <div className={style["todo"]}>
      <table className="">
        {todoList.map((todo, indx) => {
          return (
            <tr className="" key={indx}>
              <td className="">{todo.todo}</td>
              <td className="">{todo.todoDate}</td>
              <td className="">
                <a
                  href="/edit-todo"
                  className={style["btn"]}
                  style={{ backgroundColor: "green" }}
                >
                  Edit
                </a>
              </td>
              <td className="">
                <form action="/delete-todo" method="post">
                  <input type="hidden" name={indx} />
                  <Button
                    type={"submit"}
                    btnBgColor={"red"}
                    btnTitle={"Delete"}
                  />
                </form>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Todo;
