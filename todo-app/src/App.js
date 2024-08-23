import React, { useState } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TrashBin from './TrashBin';

function App() {
    const [todos, setTodos] = useState([]);
    const [deletedTodos, setDeletedTodos] = useState([]);

    const addTodo = (text) => {
        const newTodos = [...todos, { text, completed: false }];
        setTodos(newTodos);
    };

    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        const [removedTodo] = newTodos.splice(index, 1);
        setTodos(newTodos);
        setDeletedTodos([...deletedTodos, removedTodo]);
    };

    const restoreTodo = (index) => {
        const restoredTodo = deletedTodos[index];
        setTodos([...todos, restoredTodo]);
        setDeletedTodos(deletedTodos.filter((_, i) => i !== index));
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '50px' }}>
            <Paper style={{ padding: '20px' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    ToDo List
                </Typography>
                <TodoForm addTodo={addTodo} />
                <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
            </Paper>
            <TrashBin deletedTodos={deletedTodos} restoreTodo={restoreTodo} />
        </Container>
    );
}

export default App;
