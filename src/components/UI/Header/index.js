import React from 'react';
import './header.css'

const Header = () => (
  <div>
    <nav className="navbar navbar-light bg-warning top justify-content-between" >
      <span className="navbar-brand">Hi! Dear Guest</span>
      <span className="navbar-brand my-1">cart</span>
    </nav>

    <nav className="navbar navbar-light justify-content-center" >
    <div>
      <img 
      src="https://lh3.googleusercontent.com/yo7f9Ddu4fLyheO0d8kK__w8PlxR41Le1AOUew0m7mXo4ynSOGh2OIcUloIdxJdIHd2rg0Avgg=w128-h128-e365"
      alt="logo"
      />
    </div>
    <form className="form-inline my-2 my-lg-0 mi-auto">
      <input 
      className="form-control" 
      type="search" 
      placeholder="search"  
      />
      <button className="btn btn-primary mx-2">Search</button>
    </form>
    </nav>

  </div>

);

export default Header;