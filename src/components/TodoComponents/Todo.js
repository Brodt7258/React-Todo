import React from 'react';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';

import './Todo.scss';

export default ({ taskData, handleToggle }) => {
  return (
    <li 
      onClick={() => handleToggle(taskData.id)}
      className="todo-item"
      style={{ textDecoration: taskData.completed ? 'line-through' : 'none' }}
    >
      <p>
        {taskData.task}
      </p>
      {taskData.completed
      ? <FaRegCheckCircle className="check-icon" style={{ color: 'limegreen' }} />
      : <FaRegCircle className="check-icon" style={{ color: 'crimson' }} />}
    </li>
  );
};