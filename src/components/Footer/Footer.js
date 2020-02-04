import React from 'react';
import './Footer.css'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <div className="footer">
      <div className="my_website">
        <Link to='/'>
          <p>aimanadlawan.com</p>
        </Link>
      </div>
      <div className="social_media">
        <a href="https://github.com" target='_blank'>
          <img src="./img/github.png" alt=""/>
        </a>
        <a href="https://linkedin.com" target='_blank'>
          <img src="./img/linkedin.png" alt=""/>
        </a>
        <a href="https://youtube.com" target='_blank'>
          <img src="./img/youtube.png" alt=""/>
        </a>
        <a href="https://twitter.com" target='_blank'>
          <img src="./img/twitter.png" alt=""/> 
        </a>
      </div>
    </div>
  )
}

export default Footer