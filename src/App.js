import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import './App.scss';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Header from './components/Header/Header';

const todo_key = 'todos'
const updateStorage = (state) => {
  window.localStorage.setItem(todo_key, JSON.stringify(state));
}

const App = () => {
  const [state, setState] = useState({
    todos: window.localStorage.getItem('todos')
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
    ],
    searchTerm: '',
    lastSearch: '',
    searchResults: []
  });

  const todoSearch = new Fuse(state.todos, {
    keys: ['task'],
    threshold: 0.5,
    shouldSort: true
  });

  useEffect(() => {
    console.log(state);
    if (state.searchTerm === state.lastSearch) return;

    if (!state.searchTerm) {
      setState({
        ...state,
        lastSearch: '',
        searchResults: []
      });
    } else {
      setState({
        ...state,
        lastSearch: state.searchTerm,
        searchResults: todoSearch.search(state.searchTerm)
      });
    }

  }, [state, todoSearch]);

  const setSearch = e => {
    setState({
      ...state,
      searchTerm: e.target.value
    });
  };

  const addTask = task => {
    const newTodos = [ ...state.todos, task ];
    setState({
      ...state,
      todos: newTodos
    });
    updateStorage(newTodos);
  };

  const toggleCompletion = id => {
    const newTodos = state.todos.map(e => e.id === id
      ? { ...e, completed: !e.completed }
      : e
    );
    setState({
      ...state,
      todos: newTodos
    });
    updateStorage(newTodos);
  };

  const deleteCompleted = () => {
    const newTodos = state.todos.filter(e => !e.completed);
    setState({
      ...state,
      todos: newTodos
    });
    updateStorage(newTodos);
  };

  return (
    <>
      <Header searchVal={state.searchTerm} handleSearch={setSearch} />
      <div className="app-container">
        <TodoList todos={state.todos} handleToggle={toggleCompletion} />
        <TodoForm handleAdd={addTask} handleDelete={deleteCompleted} />
      </div>
    </>
  );
};

export default App;
