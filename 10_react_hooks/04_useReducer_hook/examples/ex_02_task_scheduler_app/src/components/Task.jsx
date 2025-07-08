import { useState } from "react";

function Task({ task, onEdit, onDelete }) {
  const [editMode, setEditMode] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.text);

  function handleUpdatedTaskInput(ev){
    const newTask = ev.target.value;
    setUpdatedTask(newTask);
  }

  function handleEditTask(ev){
    const newTask = {...task, text: updatedTask}
    onEdit(newTask);
    setEditMode(false);
  }

  return (
    <tr>
      <td>
        <input type="checkbox" name="selectTask" id="selectTask" className="" defaultChecked={task.done} />
      </td>
      <td>
        {
          editMode ?
          <input type="text" name="updatedTask" id="updatedTask" className="" value={updatedTask} onChange={handleUpdatedTaskInput} />
          :
          updatedTask
        }
      </td>
      <td>
        {
          editMode ?
          <button className="" onClick={handleEditTask}>Save</button>
          :
          <button className="" onClick={() => setEditMode(!editMode)}>
            Edit
          </button>
        }
      </td>
      <td>
        <button className="" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Task;
