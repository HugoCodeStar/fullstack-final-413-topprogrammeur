import React, { useState} from "react";
import "./todoapp.css";
import TodoList from "./TodoList";
import "./App.css";
function TodoForm(props) {
    const [todo, setTodo] = useState('')

   const addTodo=()=> {
       let todoDetails;
            if (todo !== "") {
        todoDetails= {
                        id: Math.floor(Math.random() * 10000),
                        value: todo,
                       isCompleted: 'noCompleted',
                      }
        props.setTodoList([...props.todoList, todoDetails]);

        }
        setTodo("")

         fetch('http://localhost:5000/api/counter', {
            method: 'post',
           headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({todoDetails})
        })
            .then(res => res.json())
          //.then((data) => console.log(data))
         .then((data) => props.setTodoList(data))


}


    return (<div className="todo">
        <input
        type="text"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        placeholder="Add todo here..."

    />
            <button className="add-btn" onClick={addTodo}>
        Add todo
    </button>
<TodoList todoList={props.todoList} setTodoList={props.setTodoList} />
    </div>)
}

export default TodoForm;

