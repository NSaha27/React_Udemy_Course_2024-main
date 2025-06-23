import './App.css';

import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";
import TodoContextProvider from "./components/store/todo-item-storage";

function App() {

  return (
    <>
      <TodoContextProvider>
        <AddTodo />
        <DisplayTodos />
      </TodoContextProvider>
    </>
  )
}

export default App
