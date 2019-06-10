import React from 'react';
import './header.css'

const Header = () => (
  <div>
    <nav id="navbar">
      <div className="container">
        <h1 className="logo"><a href="/">SHOPPING</a></h1>
        <ul>
          <li><a  className="current" href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/cart"><i class="fas fa-shopping-cart"></i></a></li>
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
      
        <div id="showcase">
         <div className="container">
           <div className="showcase-content">
             <h1><span className="text-main">Enjoy</span> Your Day </h1>
             <p className="lead">SHOP DEAL OF THE DAY</p>
             <a className="btn" href="about">About Our Site</a>
           </div>
         </div>
         </div>

  </div>

);

export default Header;