import { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // const todoList = [
  //   {
  //     todo: "Complete the pending CRUD operation project in Node JS",
  //     todoDate: "2025-05-10",
  //   },
  //   {
  //     todo: "Learn new concept in Tailwind CSS",
  //     todoDate: "2025-05-10",
  //   },
  // ];

  function addTodo(formData) {
    const newTodo = {
      todo: formData.todo,
      todoDate: formData.todoDate,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  return (
    <div className="container">
      <Navbar />
      <Form addTodo={addTodo} />
      <Todo todoList={todos} />
    </div>
  );
}

export default App;
