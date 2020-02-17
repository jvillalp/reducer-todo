import React, { useState, useReducer } from "react";

const TodoList = props => {
    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };
    const handleAddition = e =>{
        e.preventDefault();
    };
    const handleDelete = e =>{
        e.preventDefault();

    };
  return (
    <div>
      <p>this is the list</p>
    </div>
  );
};
export default TodoList;
