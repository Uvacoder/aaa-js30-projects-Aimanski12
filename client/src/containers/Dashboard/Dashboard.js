import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {isEmpty} from '../../utils/Validation'
import DashboardList from './DashboardLists/DashboardLists'
import Fragment from '../../utils/Fragment'
import './Dashboard.css'

class Dashboard extends Component {


  render() {
  let authRedirect = null
  if(!this.props.isAuthenticated){
    authRedirect = <Redirect to='/' />
  }

  let dashboard = this.props.dashboards
  let dashboardItems = null
  if(isEmpty(dashboard.dashboard)){
    dashboardItems = 
    <Fragment>
      <div className="col-sm-6 offset-sm-3">
        <div className="card Empty">
        <h5 className="card-header">
          {dashboard.mesg ? dashboard.mesg.message : ''}
        </h5>
        </div>
      </div>
      <div className="col-sm-3"></div>
    </Fragment>

  } else {
   dashboardItems = dashboard.dashboard.map((dashItem,i )=> {
      return <DashboardList 
              key={dashItem._id}
              dashItem={dashItem}/>
    })
  }
  return (
    <div className="add row">
      {authRedirect}
      {dashboardItems}
      </div>
  )}
}

const mapStateToProps = (state, ownProps) => {
  return {
    dashboards: state.dashboard,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Dashboard)