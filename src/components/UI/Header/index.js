import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

import SearchForm from '../../containers/searchForm';

const Header = () => (
  <div>
    <nav id="navbar">
      <div className="container">
        <h1 className="logo"><NavLink to="/">SHOPPING</NavLink></h1>
        <ul>
          <li><NavLink  className="current" to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/cart"><i className="fas fa-shopping-cart"></i></NavLink></li>
          <li>

          <SearchForm />

          </li>
        </ul>
        
      </div>
       </nav>
    </div>

);

export default Header;