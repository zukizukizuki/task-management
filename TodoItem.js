import React from 'react';

function TodoItem({ todo, index, toggleComplete, removeTodo }) {
    return (
        <li>
            <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
                {todo.text}
            </span>
            <button onClick={() => toggleComplete(index)}>
                {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => removeTodo(index)}>Delete</button>
        </li>
    );
}

export default TodoItem;
