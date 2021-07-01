import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    
    let todoStyle = {
        // color: "White",
        background: "#2E2E2E",
        margin: "20px auto"
    }

    let content = {
        background: "#2E2E2E"
    }

    return (
        <div className="container" style={todoStyle}>
            <h4 style={content}> {todo.title}</h4>
            <p style={content}>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
        </div>
    )
}



export default TodoItem;