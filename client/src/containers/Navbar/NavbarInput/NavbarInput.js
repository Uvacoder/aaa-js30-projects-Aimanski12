import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as action from '../../../store/actions/index'
import Fragment from '../../../utils/Fragment'

class NavbarInput extends Component {

  constructor(){
    super();
    this.state ={
      addBtnClick: false,
      dashItem: '',
      btnEnabled: true
    }
    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);

  }

  onChange = (e) => {
    if(this.state.dashItem.length > 1){
      this.setState({btnEnabled: false})  
    }
    this.setState({[e.target.name]: e.target.value})
  }
  
  onAdd = () => {
    this.onClick()
    this.props.createDashboard({ name: this.state.dashItem })
  }
  
  onClick = () => {
    this.setState({addBtnClick: !this.state.addBtnClick})
  }
  
  render() {
    
    let addBtn = <li className="nav-item">
                    <div className="form-inline my-2 my-lg-0">
                    <button 
                      onClick={this.onClick}
                      className="btn btn-outline-dark add">
                    <i className="fas fa-plus fa-sm"></i> Add</button> 
                    </div>
                  </li>

if(this.state.addBtnClick){
  addBtn = <li className="nav-item">
                <div className="form-inline my-2 my-lg-0 addBtn">
                <input 
                  className="form-control mr-sm-2" 
                  name='dashItem'
                  placeholder="Enter dashboard name" 
                  value={this.state.Component}
                  onChange={(e)=>this.onChange(e)} />
                <button 
                  disabled={this.state.btnEnabled}
                  className="btn-sm btn-outline-dark add"
                  onClick={this.onAdd}>
                  <i className="fas fa-plus fa-sm"></i> Add</button>
                </div>
              </li>
    }

    return (
      <Fragment>
        {addBtn}
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDashboard: (dashName) => {dispatch(action.createDashboard(dashName))
    }
  }
}

export default connect(null, mapDispatchToProps)(NavbarInput)