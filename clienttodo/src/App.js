import "./App.css";
import "./todoapp.css";
import TodoForm from "./TodoForm";
import {useEffect, useState} from "react";

function App() {
    const [todoList, setTodoList]=useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/counterUF')
            .then(response => response.json())
            .then((data) => setTodoList(data))
    }, [])

  return (
           <div className="App">
              <TodoForm todoList={todoList} setTodoList={setTodoList} />
           </div>
         )
}

export default App;
