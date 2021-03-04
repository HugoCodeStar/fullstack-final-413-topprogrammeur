import "./todoapp.css";
import Todo from "./Todo";



function TodoList(props) {

    const noCompletedList=(e)=>{
e.preventDefault()
    props.setTodoList(props.todoList.filter((t) => t.isCompleted==='completed'))

        fetch('http://localhost:5000/api/counterUF', {
            method: 'get',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            //body: JSON.stringify([props.todoList])
        })
            .then(res => res.json())
            // .then((data) => console.log(data))
            .then((data) => props.setTodoList(data.filter((r)=>r.isCompleted==='completed')))

    }
    const completedList=()=>{


        props.setTodoList( props.todoList.filter((t) => t.isCompleted==='noCompleted'))

        fetch('http://localhost:5000/api/counterUF', {
            method: 'get',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            //body: JSON.stringify([props.todoList])
        })
            .then(res => res.json())
            // .then((data) => console.log(data))
            .then((data) =>  props.setTodoList(data.filter((r)=>r.isCompleted==='noCompleted')))
    }


const laliste=()=>{

    fetch('http://localhost:5000/api/counter/laListe', {
        method: 'get',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        //body: JSON.stringify([props.todoList])
    })
        .then(res => res.json())
        // .then((data) => console.log(data))
        .then((data) => props.setTodoList(data))

}

    return (

        <div  className="todo">{props.todoList!== [] ? (
              <ul >{props.todoList.map((o)=>(
                   <Todo isCompleted={o.isCompleted}  id={o.id} key={o.id} value={o.value} todoList={props.todoList} setTodoList={props.setTodoList} />))}

                    <button className="completedt" onClick={(e)=>noCompletedList(e)}>
                        Complétés
                    </button>

                    <button className="completedt"   onClick={completedList}>
                        Non complétés
                    </button>

                    <button  className="completedt" onClick={laliste}>
                        Fin de la liste
                    </button>
              </ul>
       ):null}
    </div>)
}
export default TodoList;
