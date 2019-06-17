import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as action from '../../../store/actions/index'
import Fragment from '../../../utils/Fragment'
import DashHeading from '../../../components/Dashboards/Dashboard/DashHeading'
import ListItems from '../Lists/Lists'

class DashboardLists extends Component {

  constructor(){
    super()
      this.state = {
        listItem: ''
      }
    
    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
onChange=(e)=>{
  this.setState({listItem: e.target.value})
}

onSubmit=(id)=>{
  this.props.addDashboardList(id, this.state.listItem)
  this.setState({listItem: ''})
}

onClick =(id) => {
  this.props.deleteDashboard(id)
}

  render() {
    let dashboardList = this.props.dashItem

    let listItems = <ListItems 
                      dashId={dashboardList._id}
                      lists={dashboardList.lists}/>
    let dashboard = 
        <div className="col-sm-4 Col">
        <div className="card List">
          <div className="card-body">
            <button 
              className="close" 
              aria-label="Close"
              onClick={()=>this.onClick(dashboardList._id)}>
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="DashHeader">
              <DashHeading 
                dashHeadingId={dashboardList._id}
                dashHeadingTime={dashboardList.date}
                dashHeadingName={dashboardList.name}/>
            </div>
            <div className="ListSum">
              <h5 className="card-title">{dashboardList.lists.length}</h5>
              <span className="card-text">
              {dashboardList.lists.length <= 1 ? 'List' : 'Lists'}
              </span>
            </div>
            <div className="input-group DashInput">
              <input 
                type="text" 
                name='listitem'
                className="form-control"
                placeholder='Enter todos'
                value={this.state.listItem}
                onChange={(e)=>this.onChange(e)}/>
              <div className="input-group-append">
                <button 
                  className="btn btn-outline-secondary" 
                  type="button" 
                  onClick={()=>this.onSubmit(dashboardList._id)}>
                <i className="fas fa-plus fa-xs"></i>
                </button>
              </div>
            </div>
              {listItems}
          </div>
        </div>
      </div>
    return (
      <Fragment>
        {dashboard}
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteDashboard: (id)=>{dispatch(action.deleteDashboard(id))},
    addDashboardList: (id, text)=>{dispatch(action.addList(id, text))}
  }
}

export default connect(null, mapDispatchToProps)(DashboardLists);