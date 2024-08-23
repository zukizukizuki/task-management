import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} display="flex" justifyContent="space-between" mb={2}>
            <TextField
                variant="outlined"
                fullWidth
                placeholder="Add a new task"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '10px' }}>
                Add
            </Button>
        </Box>
    );
}

export default TodoForm;
