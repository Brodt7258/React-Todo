import React, { useState } from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

export default () => {
  const [state, setState] = useState([
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
  ]);

  const addTask = task => {
    setState([ ...state, task ]);
  };

  const toggleCompletion = id => {
    setState(state.map(e => e.id === id
      ? { ...e, completed: !e.completed }
      : e
    ));
  };

  const deleteCompleted = () => {
    setState(state.filter(e => !e.completed));
  };

  console.log(state);
  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      <TodoList todos={state} handleToggle={toggleCompletion} />
      <TodoForm handleAdd={addTask} handleDelete={deleteCompleted} />
    </div>
  );
};
