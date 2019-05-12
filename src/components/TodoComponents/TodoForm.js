import React, { useState } from 'react';

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
    <form action="">
      <input 
        type="text" 
        placeholder="...todo"
        onChange={handleInput}
        value={value}
      />
      <button
        onClick={submitBtnCtrl}
        type="submit"
      >
        Add Todo
      </button>
      <button onClick={deleteBtnCtrl}>
        Clear Completed
      </button>
    </form>
  );
};