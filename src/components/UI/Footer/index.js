import React from 'react';
import './footer.css'

const Footer = () => (
      <footer>
        <div className="container">
          <div className="footer-content">
            <nav className="category-menu">
            <ul>
              <li><a href="/about"><h3>Product Categories</h3></a></li>
              <li><a  className="current" href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            </nav>
            <nav className="site-menu">
            <ul>
              <li><a href="/about"><h3>About Site</h3></a></li>
              <li><a  className="current" href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            </nav>
            <nav className="site-menu">
            <ul>
              <li><a href="/about"><h3>Help & Support</h3></a></li>
              <li><a  className="current" href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            </nav>
          </div>
            </div>
        
      </footer>
  );

export default Footer;