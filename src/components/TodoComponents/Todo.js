import React from 'react';

export default ({ taskData, handleToggle }) => {
  return (
    <div onClick={() => handleToggle(taskData.id)}>
      {taskData.task}
    </div>
  );
};