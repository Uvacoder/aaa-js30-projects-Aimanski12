import React from 'react';
import './Middle.css'
import {Link} from 'react-router-dom'

const Middle = () => {
  return (
    <div className="mainText">
      <div className="container">
        <h1>Currency Exchange</h1>
        <p>I build this website to showcase all common currency rates and its published exchange value based from the European Central Bank. You can browse and navigate to this website to view currencies and convert difference currencies.</p>
        <Link to='/currencies'>
          <button>Check Currencies</button>
        </Link>
      </div>
    </div>
  )
}

export default Middle