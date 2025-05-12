import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import CardSwitcher from './components/CardSwitcher/CardSwitcher';
import ErrorPage from './components/ErrorPage/ErrorPage';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="navBarWrapper">
      <nav>
          <ul className='navBar'>
            <li>
              <Link to="/" className='link'>Главная</Link>
            </li>
            <li>
              <Link to="/cards" className='link'>Карточки</Link>
            </li>
          </ul>
        </nav>
      </div>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cards" element={<CardSwitcher />} />
        <Route path="*" element={<ErrorPage />} /> 
      </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
