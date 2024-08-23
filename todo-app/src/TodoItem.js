import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({ todo, index, toggleComplete, removeTodo }) {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => removeTodo(index)}>
                    <DeleteIcon />
                </IconButton>
            }
        >
            <Checkbox
                edge="start"
                checked={todo.completed}
                onClick={() => toggleComplete(index)}
            />
            <ListItemText
                primary={todo.text}
                style={{ textDecoration: todo.completed ? 'line-through' : '' }}
            />
        </ListItem>
    );
}

export default TodoItem;
