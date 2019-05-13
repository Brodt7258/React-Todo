import React from 'react';

import Todo from './Todo';
import './Todo.scss';

export default ({ todos, handleToggle }) => {
  return (
    <div>
      <h3 className="sub-title">On your list today...</h3>
      <ul className="todo-list">
        {todos.map((e, i) => <Todo taskData={e} key={e.id} handleToggle={handleToggle} />)}
      </ul>
    </div>
  );
};