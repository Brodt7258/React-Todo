import React from 'react';

import Todo from './Todo';

export default ({ todos }) => {
  return (
    <div>
      <h3>TodoList</h3>
      {todos.map((e, i) => <Todo taskData={e} key={i} />)}
    </div>
  );
};