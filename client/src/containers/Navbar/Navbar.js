import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as action from '../../store/actions/index'

import Fragment from '../../utils/Fragment'
import NavBtn from './NavbarInput/NavbarInput'
import './Navbar.css'

class Navbar extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser()
  }

  render(){

    const needAuthentication = 
      <Fragment>
        <li className="nav-item">
          <Link 
            className="nav-link" 
            to='/signin'>
            <i className="fas fa-user-edit fa-sm"></i> Signin</Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to='/login'>
            <i className="fas fa-sign-in-alt fa-sm"></i> Login</Link>
        </li>
      </Fragment>
    
    const guestAuthenticated = 
      <Fragment>
      <NavBtn />
      <li className="nav-item">
          <Link
            className="nav-link"
            to='/dashboard'>
            <i className="far fa-list-alt fa-sm"></i> Dashboard</Link>
        </li>
      <li className="nav-item">
        <a 
          href="/"
          onClick={(e)=>this.onLogout(e)}
          className="nav-link">
        <i className="fas fa-user fa-sm"></i> Logout</a>
      </li>
      </Fragment>

    


    return (
      <Fragment>
      <div className="NavHeader">
          <div className="container">
            <div className="Header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light NavBk">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link 
                    className="navbar-brand" 
                    to='/'>My TodoList App</Link>
                </div>
                <ul className="nav navbar-nav navbar-right">
                  {this.props.isAuthenticated? guestAuthenticated : needAuthentication}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </Fragment>
  )}
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {dispatch(action.logoutUser())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)