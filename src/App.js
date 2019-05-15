import React, { useState } from 'react';
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
    ]
  });

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
    <div>
      <Header />
      <div className="app-container">
        <TodoList todos={state.todos} handleToggle={toggleCompletion} />
        <TodoForm handleAdd={addTask} handleDelete={deleteCompleted} />
      </div>
    </div>
  );
};

export default App;
