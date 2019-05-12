import React from 'react';

import Todo from './Todo';

export default ({ todos }) => {
  return (
    <div>
      <div>TodoList</div>
      {todos.map((e, i) => <Todo taskData={e} key={i} />)}
    </div>
  );
};