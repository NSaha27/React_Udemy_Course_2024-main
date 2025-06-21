import { createContext } from "react";

const TodoItemContext = createContext({
  todoItems: [],
  setTodoList: () => {},
  deleteItem: () => {}
});

export default TodoItemContext;