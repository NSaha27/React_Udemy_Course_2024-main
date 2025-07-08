import { useContext, useState } from "react";
import TaskContext from "../store/Task-storage";
import css from "./css/AddTask.module.css";

function AddTask() {
  const {addTask} = useContext(TaskContext);
  const [text, setText] = useState("");

  function handleChange(ev){
    setText(ev.target.value);
  }

  function handleFormSubmit(ev){
    ev.preventDefault();
    
    addTask(text);
    setText("");
  }

  return (
    <div className={css["add-task-container"]}>
      <form action="" method="post" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          className=""
          placeholder="enter task here..." onChange={handleChange} value={text}
        />
        <button type="submit" className="">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTask;
