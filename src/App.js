import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import './App.scss';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Header from './components/Header/Header';

import useDebounce from './util/helpers';

const todo_key = 'todos'
const updateStorage = (state) => {
  window.localStorage.setItem(todo_key, JSON.stringify(state));
}

const App = () => {
  const [todos, setTodos] = useState(
    window.localStorage.getItem('todos')
    ? JSON.parse(window.localStorage.getItem('todos'))
    : [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ]
  );

  const [searchTerm, setTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const [searchResults, setResults] = useState([]);

  useEffect(() => {
    if (!debouncedSearchTerm) {
      setResults([]);
      return;
    }

    const todoSearch = new Fuse(todos, {
      keys: ['task'],
      threshold: 0.5,
      shouldSort: true
    });
    setResults(todoSearch.search(debouncedSearchTerm));
  }, [debouncedSearchTerm, todos]);

  const setSearch = e => {
    setTerm(e.target.value);
  };

  const addTask = task => {
    const newTodos = [ ...todos, task ];
    setTodos(newTodos);
    updateStorage(newTodos);
  };

  const toggleCompletion = id => {
    const newTodos = todos.map(e => e.id === id
      ? { ...e, completed: !e.completed }
      : e
    );
    setTodos(newTodos);
    updateStorage(newTodos);
  };

  const deleteCompleted = () => {
    const newTodos = todos.filter(e => !e.completed);
    setTodos(newTodos);
    updateStorage(newTodos);
  };

  return (
    <>
      <Header searchVal={searchTerm} handleSearch={setSearch} />
      <div className="app-container">
        <TodoList 
          todos={todos} 
          searchResults={searchResults} 
          searchTerm={debouncedSearchTerm} 
          handleToggle={toggleCompletion} 
        />
        <TodoForm handleAdd={addTask} handleDelete={deleteCompleted} />
      </div>
    </>
  );
};

export default App;
