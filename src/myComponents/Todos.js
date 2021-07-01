import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {

    let footerStyle = {
        minHeight: "70vh",
        margin: "40px auto",
        color: "white",
        background: "#2E2E2E",
        border: "2px solid #2E2E2E",
        borderRadius: "25px"
    }

    return (
        <div className="container" style={footerStyle}>
            <h3 style={{background: "#2E2E2E"}}>Todos List</h3>
            {props.todos.length===0? "No todos to display": 
                props.todos.map((todo) => {
                    return (
                    <>    
                    <TodoItem todo={todo} key={todo.Sno} onDelete={props.onDelete}/> <hr/>
                    </>
                    )
                })
            }
        </div>
    )
}

export default Todos;
