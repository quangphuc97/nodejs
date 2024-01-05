import "../style/todo.css";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { useState, useEffect } from "react";
function Todo() {
  const [todoList, setTodoList] = useState([]);
  function getTodoList(){
    fetch("http://localhost:3000/api/todo", { method: "GET" })
    .then((reponse) => reponse.json())
    .then((data) => setTodoList(data))
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    getTodoList();
  }, []);
  return (
    <div>
      <h2>To Do App</h2>
      <TodoForm type={'create'} callbackSuccess={getTodoList}/>
      <TodoList todoList={todoList}  />
    </div>
  );
}
export default Todo;
