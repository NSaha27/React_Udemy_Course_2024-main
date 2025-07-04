import { createContext } from "react";

const TaskContext = createContext({
  taskList: [],
  addTask: () => {},
  editTask: () => {},
  deleteTask: () => {},
});

export default TaskContext;
