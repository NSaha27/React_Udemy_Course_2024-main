import { useReducer } from "react";

import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskReducer from "./components/TaskReducer";
import Welcome from "./components/Welcome";
import TaskContext from "./store/Task-storage";

import "./App.css";

let nextId = 0;

function App() {
  const [taskList, taskDispatcher] = useReducer(TaskReducer, []);

  function addTask(text){
    const addTaskAction = {
      type: "ADD_TASK",
      id: nextId++,
      text: text,
    }
    taskDispatcher(addTaskAction);
  }

  function editTask(task){
    const editTaskAction = {
      type: "EDIT_TASK",
      task: task,
    }
    taskDispatcher(editTaskAction);
  }

  function deleteTask(taskID){
    const deleteTaskAction = {
      type: "DELETE_TASK",
      id: taskID,
    }
    taskDispatcher(deleteTaskAction);
  }

  return <>
    <TaskContext.Provider value={{taskList, addTask, editTask, deleteTask}}>
      <Welcome appTitle={"Task Schedular App"} />
      <AddTask />
      <TaskList />
    </TaskContext.Provider>
  </>;
}

export default App;
