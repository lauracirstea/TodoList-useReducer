import React, { useReducer, useState, useEffect } from 'react';
import Form from './components/Form';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import AppContext from './AppContext';
import todosReducer from './todosReducer';
import { ALL } from './useFilter';

import './App.css';

function App() {
    const [todos, todosDispatch] = useReducer(
        todosReducer,
        JSON.parse(localStorage.getItem('todos')) || []
    );

    const [activeFilter, setActiveFilter] = useState(ALL);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <AppContext.Provider value={{ todos, todosDispatch }}>
            <div className="todo-app">
                <Form />
                <Filter setActiveFilter={setActiveFilter} />
                <TodoList filter={activeFilter} />
            </div>
        </AppContext.Provider>
    );
}
export default App;
