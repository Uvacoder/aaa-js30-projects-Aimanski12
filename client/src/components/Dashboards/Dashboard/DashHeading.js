import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as action from '../../../store/actions/index'
import moment from 'moment'
import Fragment from '../../../utils/Fragment'

class DashHeading extends Component {

  constructor(){
    super();
    this.state = {
      dashHeadingSwitch: true,
      dashName: ''
    }
    this.onClick = this.onClick.bind(this)
    this.onSubmitItem = this.onSubmitItem.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount(){
    this.setState({dashName: this.props.dashHeadingName})
  }

  onChange=(e)=>{
    this.setState({dashName: e.target.value})
  }
  onSubmitItem = (id) => {
    this.props.editDashboard(id, this.state.dashName)
    this.onClick()
  }
  onClick=()=>{
    this.setState({dashHeadingSwitch: !this.state.dashHeadingSwitch})
  }

render(){

  let dashheading = null

  if(this.state.dashHeadingSwitch){
    dashheading = 
    <Fragment>
      <h5 className="card-title"
        onClick={this.onClick}>
        {this.props.dashHeadingName}</h5>
        <span className="card-text date">
          {moment(this.dashHeadingTime).format('dddd')}, {' '}
          {moment(this.dashHeadingTime).format('Do')} {' '}
        <i>{moment(this.dashHeadingTime).format('MMMM')}</i></span>
    </Fragment>
  } else {
    dashheading =
      <div className="input-group DashInput">
        <input 
          type="text" 
          name='dashname'
          className="form-control" 
          value={this.state.dashName}
          onChange={(e)=>this.onChange(e)}/>
        <div className="input-group-append">
          <button 
            className="btn btn-outline-secondary" 
            type="button" 
            aria-haspopup="true"
            onClick={()=>this.onSubmitItem(this.props.dashHeadingId)}>
            <i className="fas fa-edit fa-xs"></i>
          </button>
      </div>
    </div>
  }

  return (
    <Fragment>  
      {dashheading}
    </Fragment>
  )}
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editDashboard: (id, name)=>{dispatch(action.editDashboard(id, name))}
  }
}

export default connect(null, mapDispatchToProps)(DashHeading);