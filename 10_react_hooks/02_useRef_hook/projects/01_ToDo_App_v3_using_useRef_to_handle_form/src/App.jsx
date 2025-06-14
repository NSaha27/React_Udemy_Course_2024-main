import { useState } from "react";
import './App.css';

import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  const [todoList, setTodoList] = useState([]);

  function handleDelBtnClick(todoTitle){
    const newTodoList = todoList.filter(todo => todo.todoTitle !== todoTitle);
    setTodoList(newTodoList);
  }

  return (
    <>
      <AddTodo setTodoList={setTodoList} />
      <DisplayTodos todoList={todoList} onDelBtnClick={handleDelBtnClick} />
    </>
  )
}

export default App
