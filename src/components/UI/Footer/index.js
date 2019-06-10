import React from 'react';
import './footer.css'
import { NavLink } from 'react-router-dom';
const Footer = () => (
      <footer>
        <div className="container">
          <div className="footer-content">
            <nav className="category-menu">
            <ul>
              <li><NavLink to="/about"><h3>Product Categories</h3></NavLink></li>
              <li><NavLink  className="current" to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            </nav>
            <nav className="site-menu">
            <ul>
              <li><NavLink to="/about"><h3>About Site</h3></NavLink></li>
              <li><NavLink  className="current" to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            </nav>
            <nav className="site-menu">
            <ul>
              <li><NavLink to="/about"><h3>Help & Support</h3></NavLink></li>
              <li><NavLink  className="current" to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            </nav>
          </div>
            </div>
        
      </footer>
  );

export default Footer;