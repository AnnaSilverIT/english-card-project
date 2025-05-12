import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import './Header.css';
import logo from '../logo.svg'; 
import {Link} from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
  return (
    <header className='header'>
      <div className="headerWrapper">
      <Link to="/" className='link'>
        <img src={logo} className="header__logo"  alt="books" />
      </Link>
        <h1>Гуолинго</h1>
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      </div>
    </header>
  )
}

export default Header
