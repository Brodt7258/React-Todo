import React, { useState } from 'react';

import './Todo.scss';

export default ({ handleAdd, handleDelete }) => {
  const [value, setValue] = useState('');

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const submitBtnCtrl = (e) => {
    e.preventDefault();
    handleAdd({
      task: value,
      id: Date.now(),
      completed: false
    });
    setValue('');
  };

  const deleteBtnCtrl = (e) => {
    e.preventDefault();
    handleDelete();
  };

  return(
    <div className="todo-ctrls">
      <h3>What else needs to get done?</h3>
      <form action="">
        <input 
          type="text" 
          placeholder="...todo"
          onChange={handleInput}
          value={value}
        />
        <div>
          <button
            onClick={submitBtnCtrl}
            type="submit"
            className="add"
          >
            Add Todo
          </button>
          <button 
            onClick={deleteBtnCtrl}
            className="clear"
          >
            Clear Completed
          </button>
        </div>  
      </form>
    </div>
  );
};