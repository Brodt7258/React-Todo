import React from 'react';

import './ThemeToggle.scss';

const ThemeToggle = () => {
  return (
    <div className="theme-toggle">
      <input id="theme-toggle" type="checkbox"/>
      <label htmlFor="theme-toggle" className="toggle-btn"></label>
    </div>
    
  )
};

export default ThemeToggle;