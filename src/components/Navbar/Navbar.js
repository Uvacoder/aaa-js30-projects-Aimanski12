import React from 'react';
import './Navbar.css';

import {
  Link
} from 'react-router-dom'

const Navbar = () => {

  return(
    <nav>
      <div className="menu-icon">
          <i className="fa fa-bars fa-2x"></i>
      </div>
      <div className="logo">
        <Link to='/'>
          <i className="fas fa-dollar-sign fa-lg"></i>
          <span>Currency Exchange</span>
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/currencies'>Currencies</a></li>
          <li><a href='/convert'>Convert</a></li>
        </ul>
      </div>
    </nav>
  )
}


export default Navbar