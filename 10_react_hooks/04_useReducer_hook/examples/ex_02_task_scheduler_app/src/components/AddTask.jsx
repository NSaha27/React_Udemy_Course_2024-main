import { useContext } from "react";
import TaskContext from "../store/Task-storage";
import css from "./css/AddTask.module.css";

function AddTask() {
  const { addTask } = useContext(TaskContext);

  return (
    <div className={css["add-task-container"]}>
      <form action="" method="post" onSubmit={addTask}>
        <input
          type="text"
          name="task"
          id="task"
          className=""
          placeholder="enter task here..."
        />
        <button type="submit" className="">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTask;
