import React from 'react';

const SearchBar = ({ searchVal, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search your tasks..."
      value={searchVal}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;