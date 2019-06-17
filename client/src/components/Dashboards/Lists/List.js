import React, { Component } from 'react'
import moment from 'moment'
import * as action from '../../../store/actions/index'
import {connect} from 'react-redux'
import Fragment from '../../../utils/Fragment'

class List extends Component {

  constructor(){
    super();
    this.state={
      editSwitch: false,
      listItem: ''
    }
    this.dashBoardSwitch = this.dashBoardSwitch.bind(this)
    this.deleteDashBoard = this.deleteDashBoard.bind(this)
    this.submit = this.submit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
  }

  componentDidMount(){
    this.setState({listItem: this.props.list})
  }

  dashBoardSwitch=()=>{
    this.setState({editSwitch: !this.state.editSwitch})
  }

  deleteDashBoard=(dashId, id)=>{ 
    this.props.deleteList(dashId, id)
  }

  onChange=(e)=>{
    this.setState({listItem: e.target.value})
  }

  submit=(dashId, id)=>{
    this.props.editList(dashId, id, this.state.listItem)
    this.dashBoardSwitch()
  }

  changeStatus=(dashId, id)=>{
    this.props.updateList(dashId, id)
  }

  render() {
let classItems = ['mb-1']
if(this.props.status === 'done'){
  classItems.push('done')
}

    let list = 
        <li 
          key={classItems.join(' ')}
          className="list-group-item list-group-item-action flex-column align-items-start">
            <p 
              className={classItems}
              onClick={()=>this.changeStatus(this.props.dashId, this.props.listId)}
              // onClick={this.dashBoardSwitch}
              >{this.props.list}</p>
            <div className="d-flex justify-content-start Icons">
              <small>{moment(this.props.listDate).format('LT')}</small>
              <i 
              className="fas fa-trash-alt fa-xs"
              onClick={()=>this.deleteDashBoard(this.props.dashId, this.props.listId)}></i>
            </div>
          </li>

    if(this.state.editSwitch){
      list = <div className="input-group DashInput">
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.listItem}
                  onChange={(e)=>this.onChange(e)}
                  />
                <div className="input-group-append">
                  <button 
                    className="btn btn-outline-secondary"
                    type="button"
                    aria-haspopup="true"
                    onClick={()=>this.submit(this.props.dashId, this.props.listId)}>
                    <i className="fas fa-plus fa-xs"></i>
                  </button>
                </div>
              </div>
    }

    return (
      <Fragment>
        {list}
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editList: (dashId, id, text)=>{dispatch(action.editList(dashId, id, text))},
    deleteList: (dashId, id)=>{dispatch(action.deleteList(dashId, id))},
    updateList: (dashId, id)=>{dispatch(action.updateListStatus(dashId, id))}
  }
}

export default connect(null, mapDispatchToProps)(List)