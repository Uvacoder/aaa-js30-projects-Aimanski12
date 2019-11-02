import React, {Component} from 'react'

class Footer extends Component {
  render(){
    return (
       <div className="footer">
        <div className="line"></div>
        <div className='footDesc'>
          <h5>moviesearcherapp.com</h5>
          <p>This is another ReactJS project by Aiman Adlawan. It uses MovieDB to render data. If you want to view the source code of this app you can view it here. If you like this app, please give a like <a href='sample.com'>here</a></p>
        </div>
        <div className='footcopy'>
          <p>2019 © All rights reserved. aimanski.com</p>
        </div>
      </div>
    )
  }
}
export default Footer