import React from 'react';

import logo from '../assets/logo1.png'

export default function componentName(props) {
  return (
    <div className='header flex'>
      <h1>Twitter Search</h1>
      <div className="input-group mb-3 inputArea">
        <img src={logo} alt=""/>
        <input 
          type="text" 
          className="form-control" 
          placeholder="#enterAHashtag"
          value={props.inputValue !== '' ? `${props.inputValue}` : ''}
          onChange={(e)=>props.change(e)} />
        <div className="input-group-append btnSearch">
          <span 
            className="input-group-text"
            onClick={()=>props.click()}>
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
