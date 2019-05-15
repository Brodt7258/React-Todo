import React from 'react';
import './Header.scss';

import SearchBar from './SearchBar';

const Header = ({ searchVal, handleSearch }) => {
  return (
    <header className="header-bar">
      <h1>
        React Todo
      </h1>
      <SearchBar searchVal={searchVal} handleSearch={handleSearch} />
    </header>
  );
};

export default Header;