import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'

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

          <form className="form-inline my-2 my-lg-0 mi-auto header-style">
          <input 
          className="form-control" 
          type="search" 
          placeholder="search"  
          />
          <button className=" btn mx-4"><i class="fas fa-search"></i></button>
        </form>
          </li>
        </ul>
        
      </div>
       </nav>
    </div>

);

export default Header;