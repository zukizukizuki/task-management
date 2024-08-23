import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, removeTodo }) {
    return (
        <List>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                />
            ))}
        </List>
    );
}

export default TodoList;
