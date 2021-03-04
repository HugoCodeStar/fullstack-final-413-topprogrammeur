import React from "react";
import "./todoapp.css";


function Todo(props) {

    const todoCompleted = (id) => {

        const element = props.todoList.findIndex((elem) => elem.id === id);
        const newTaskList = [...props.todoList];
        newTaskList[element] = {
            ...newTaskList[element],
            isCompleted: 'noCompleted',
        }

        props.setTodoList(newTaskList);
        console.log(props.todoList)
        fetch('http://localhost:5000/api/counter/false', {
            method: 'post',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({id})
        })
            .then(res => res.json())
            .then((data) => console.log(data))
    }

    const todoNoCompleted = (id) => {
        const element = props.todoList.findIndex((elem) => elem.id === id);
        const newTaskList = [...props.todoList];
        newTaskList[element] = {
            ...newTaskList[element],
            isCompleted: 'completed',
        }
        props.setTodoList(newTaskList);
        fetch('http://localhost:5000/api/counter/true', {
            method: 'post',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({id})
        })
            .then(res => res.json())
            .then((data) => console.log(data))
    }

    const deleteTodo = (id) => {

         const arrayDelete = props.todoList.filter((t) => t.id !==id)
         console.log(props.id)
         props.setTodoList(arrayDelete)

        fetch('http://localhost:5000/api/counter/delete', {
            method: 'post',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({id})
        })
            .then(res => res.json())
            .then((data) => props.setTodoList(data))
    }

    return (
            <li className={props.isCompleted==='completed' ? "crossText" : "listitem"}>
                {props.value}
                    <button className="delete" onClick={() => deleteTodo(props.id)}>
                        -
                    </button>

                    <button className="completed" onClick={() => {
                        props.isCompleted ==='completed' ? todoCompleted(props.id) : todoNoCompleted(props.id)}}>
                        v
                    </button>
            </li>
           )
}
export default Todo;

