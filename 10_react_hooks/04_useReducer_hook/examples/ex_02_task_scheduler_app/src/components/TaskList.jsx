import { useContext } from "react";

import TaskContext from "../store/Task-storage";
import Task from "./Task";
import css from "./css/TaskList.module.css";

function TaskList(){
  const {taskList, editTask, deleteTask} = useContext(TaskContext);
  
  return <div className={css["task-list-container"]}>
    {
      taskList.length > 0 ?
      <table className="">
        <tbody className="">
          {
            taskList.map((task) => {
              return <Task key={task.id} task={task} onEdit={(updatedTask) => editTask(updatedTask)} onDelete={() => deleteTask(task.id)} />
            })
          }
        </tbody>
      </table>
      :
      <h2 className="">no task is yet to be done!</h2>
    }
  </div>
}

export default TaskList;