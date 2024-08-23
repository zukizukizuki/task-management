import React from 'react';
import { Paper, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';

function TrashBin({ deletedTodos, restoreTodo }) {
    return (
        <Paper style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h5" align="center" gutterBottom>
                Trash Bin
            </Typography>
            <List>
                {deletedTodos.map((todo, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={todo.text} />
                        <IconButton edge="end" aria-label="restore" onClick={() => restoreTodo(index)}>
                            <RestoreIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default TrashBin;
