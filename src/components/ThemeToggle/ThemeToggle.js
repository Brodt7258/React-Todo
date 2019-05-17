import React, { useContext } from 'react';

import './ThemeToggle.scss';
import { ThemeContext } from '../../util/helpers';

const ThemeToggle = ({ handleToggle }) => {
  const darkMode = useContext(ThemeContext);  

  return (
    <div className={`theme-toggle ${darkMode ? 'dark-toggle' : 'light-toggle'}`}>
      <input id="theme-toggle" type="checkbox" onChange={handleToggle} checked={darkMode} />
      <label htmlFor="theme-toggle" className="toggle-btn"></label>
      <label htmlFor="theme-toggle" className="theme-label"></label>
    </div>   
  );
};

export default ThemeToggle;