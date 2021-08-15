import React from 'react'

export const Todoitem = (props) => {
    return (
        <>
        <div>
          
            <h2>{props.todo.title}</h2>
            <h3>{props.todo.desc}</h3>
            <button className="btn btn-danger" onClick={(()=>{props.Delete(props.todo)})}>Delete</button>
        </div>
        <hr />
        </>
    )
}
