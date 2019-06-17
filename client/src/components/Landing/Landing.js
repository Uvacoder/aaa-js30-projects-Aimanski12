import React from 'react';
import {Link} from 'react-router-dom'
import Fragment from '../../utils/Fragment';
import './Landiing.css'

const Landing = () => {

  return (
    <Fragment>
      <div className='container'>
        <div className="jumbotron">
          <h1 className="display-4">Welcome to my TodoList App!</h1>
          <p className="lead">I am building this app to master my skils on MERN (MongoDB, ExpressJS, ReactJS, NodeJS)stack with Redux. It was hard at first but when you understand the core concepts of the language, things will get easier and you can you build cool apps. </p>
          <hr className="my-4" />
          <p>This app is public and you can personally use this app for your daily activities. This app works on desktop and also on tablet and mobile. Thank you for using my app and I hope you enjoy using it.</p>
          <p className="lead leadBtn">
            <Link 
            to='/signin'
            className="btn btn-primary" >Signin</Link>
            <Link 
            to='/login'
            className="btn btn-primary pull-right" >Login</Link>
          </p>
        </div>
      </div>
    </Fragment>
  )
}
export default Landing