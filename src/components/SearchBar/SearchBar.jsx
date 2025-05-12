import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Поиск..."
        className="search-bar__input"
      />
      <button className="search-bar__button">
        <span className="search-bar__icon">🔍</span>
      </button>
    </div>
  );
};

export default SearchBar;