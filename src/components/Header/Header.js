import React, { useContext } from 'react';
import './Header.scss';

import SearchBar from './SearchBar';
import { ThemeContext } from '../../util/helpers'

const Header = ({ searchVal, handleSearch }) => {
  const darkMode = useContext(ThemeContext);

  return (
    <header className={`header-bar ${darkMode ? 'dark-header' : 'light-header'}`}>
      <h1>
        React Todo
      </h1>
      <SearchBar searchVal={searchVal} handleSearch={handleSearch} />
    </header>
  );
};

export default Header;