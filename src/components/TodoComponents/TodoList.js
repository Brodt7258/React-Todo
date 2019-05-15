import React from 'react';

import Todo from './Todo';
import './Todo.scss';

 const TodoList = ({ todos, searchResults, handleToggle }) => {
  return (
    <div>
      <h3 className="sub-title">On your list today...</h3>
      <ul className="todo-list">
        {searchResults.length
          ? searchResults.map(e => <Todo taskData={e} key={e.id} handleToggle={handleToggle} />)
          : todos.map(e => <Todo taskData={e} key={e.id} handleToggle={handleToggle} />)}
      </ul>
    </div>
  );
};

export default TodoList;
