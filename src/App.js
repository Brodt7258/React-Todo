import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import './App.scss';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Header from './components/Header/Header';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

import { useDebounce, ThemeContext } from './util/helpers';

const todo_key = 'todos';
const dark_theme = 'dark';
const updateStorage = (key, state) => {
  window.localStorage.setItem(key, JSON.stringify(state));
}

const App = () => {
  const [todos, setTodos] = useState(
    window.localStorage.getItem(todo_key)
    ? JSON.parse(window.localStorage.getItem(todo_key))
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

  const addTask = task => {
    const newTodos = [ ...todos, task ];
    setTodos(newTodos);
    updateStorage(todo_key, newTodos);
  };

  const toggleCompletion = id => {
    const newTodos = todos.map(e => e.id === id
      ? { ...e, completed: !e.completed }
      : e
    );
    setTodos(newTodos);
    updateStorage(todo_key, newTodos);
  };

  const deleteCompleted = () => {
    const newTodos = todos.filter(e => !e.completed);
    setTodos(newTodos);
    updateStorage(todo_key, newTodos);
  };

  // Search Stuff

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

  // Theme Stuff

  const [darkMode, setDarkMode] = useState(
    window.localStorage.getItem(dark_theme)
    ? JSON.parse(window.localStorage.getItem(dark_theme))
    : false
  );

  const toggleDark = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    updateStorage(dark_theme, newTheme);
  };

  useEffect(() => {
    console.log('DARK_MODE', darkMode);
    document.body.style.backgroundColor = darkMode ? '#0c0c0c' : 'white' ;
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={darkMode}>
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
      <ThemeToggle handleToggle={toggleDark} />
    </ThemeContext.Provider>
  );
};

export default App;
