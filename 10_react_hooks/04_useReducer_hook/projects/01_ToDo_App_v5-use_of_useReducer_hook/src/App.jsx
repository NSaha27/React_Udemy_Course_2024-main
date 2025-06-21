import { useReducer } from "react";
import './App.css';

import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";
import TodoItemContext from "./components/store/todo-item-storage";

function todoReducer(currTodoList, action){
  let newTodoList = currTodoList;
  switch(action.type){
    case "ADD_TODO":
      newTodoList = [...currTodoList, action.payload];
      break;
    case "DELETE_TODO":
      newTodoList = currTodoList.filter(todo => todo.todoTitle !== action.payload.todoTitle);
      break;
    default:
      throw new Error("invalid action!");
  }
  return newTodoList;
}

function App() {
  const [todoList, todoDispatcher] = useReducer(todoReducer, []);

  console.log(todoList);
  

  function addTodoItem({todoTitle, todoDate}){
    const addTodoAction = {
      type: "ADD_TODO",
      payload: {
        todoTitle,
        todoDate
      }
    }
    todoDispatcher(addTodoAction);
  }

  function deleteTodoItem(todoTitle){
    const deleteTodoAction = {
      type: "DELETE_TODO",
      payload: {
        todoTitle
      }
    }
    todoDispatcher(deleteTodoAction);
  }

  return (
    <>
      <TodoItemContext.Provider value={{
        todoList,
        addTodoItem,
        deleteTodoItem
      }}>
        <AddTodo />
        <DisplayTodos />
      </TodoItemContext.Provider>
    </>
  )
}

export default App
