import React from "react";
import '../App.css'

const Todo = props => {
    const done = (id) =>{
        // e.preventDefault();
        props.dispatch({ type: 'TOGGLE_COMPLETED', id:id })
    }
    return (
        <div>
        {props.state.map(newTodo =>{
            return (
            <div key={newTodo.id} className={`newTodo${newTodo.completed ? 'completed' : ''}`} onClick={()=> done(newTodo.id)}>
            <p>{newTodo.item}</p>
            </div>
        )})}
    
        </div>
      )
};
export default Todo;

