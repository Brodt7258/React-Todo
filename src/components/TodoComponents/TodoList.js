import React, { useContext } from 'react';

import Todo from './Todo';
import './Todo.scss';
import { ThemeContext } from '../../util/helpers';

 const TodoList = ({ todos, searchResults, searchTerm, handleToggle }) => {
  const darkMode = useContext(ThemeContext);

  return (
    <div>
      <h3 className={`sub-title ${darkMode ? 'dark-title' : 'light-title'}`}>On your list today...</h3>
      <ul className="todo-list">
        {!searchTerm
          ? todos.map(e => <Todo taskData={e} key={e.id} handleToggle={handleToggle} />)
          : searchResults.length
          ? searchResults.map(e => <Todo taskData={e} key={e.id} handleToggle={handleToggle} />)
          : <div className="no-result-panel">
              <h3 className={darkMode ? 'dark-title' : 'light-title'}>No results.  Maybe try a different search?</h3>
            </div>}
      </ul>
    </div>
  );
};

export default TodoList;
