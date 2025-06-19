import { useState } from "react";
import './App.css';

import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";
import TodoItemContext from "./components/store/todo-item-storage";

function App() {
  const [todoList, setTodoList] = useState([]);

  function deleteItem(todoTitle){
    const newTodoList = todoList.filter(todo => todo.todoTitle !== todoTitle);
    setTodoList(newTodoList);
  }

  return (
    <>
      <TodoItemContext.Provider value={{
        todoList,
        setTodoList,
        deleteItem
      }}>
        <AddTodo />
        <DisplayTodos />
      </TodoItemContext.Provider>
    </>
  )
}

export default App
