import React from 'react';
import TodoItem from './todo-app/src/TodoItem';

function TodoList({ todos, toggleComplete, removeTodo }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;
