import React, { useContext } from 'react';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';

import './Todo.scss';
import { ThemeContext } from '../../util/helpers';

 const Todo = ({ taskData, handleToggle }) => {
  const darkMode = useContext(ThemeContext);

  return (
    <li 
      onClick={() => handleToggle(taskData.id)}
      className={`todo-item ${darkMode ? 'todo-dark' : 'todo-light'}`}
      style={{ textDecoration: taskData.completed ? 'line-through' : 'none' }}
    >
      <p>
        {taskData.task}
      </p>
      {taskData.completed
      ? <FaRegCheckCircle className="check-icon" style={{ color: darkMode ? 'teal' : 'limegreen' }} />
      : <FaRegCircle className="check-icon" style={{ color: darkMode ? 'palevioletred' : 'crimson' }} />}
    </li>
  );
};

export default Todo;
