import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeSlider = () => (
    <div id="showcase">
    <div className="container">
      <div className="showcase-content">
        <h1><span className="text-main">Enjoy</span> Your Day </h1>
        <p className="lead">SHOP DEAL OF THE DAY</p>
        <NavLink className="btn" to="about">About Our Site</NavLink>
      </div>
    </div>
    </div>
  );

export default HomeSlider;