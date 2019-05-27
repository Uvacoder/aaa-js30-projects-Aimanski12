import React from 'react'
import {connect} from 'react-redux'
import * as action from '../../store/actions/index'
import moment from 'moment'

const Footer = (props) => {

  return (
    <React.Fragment>
      <div className="FooterBottom">
          <div className="degrees">
            <small 
              className={props.temp === 'celcius' ? '' : 'unselected'}
              onClick={()=>{props.changeTemp('celcius')}}>&#176;C</small> / {' '}
            <small 
              className={props.temp === 'fahrenhiet' ? '' : 'unselected'}
              onClick={()=>{props.changeTemp('fahrenhiet')}}>&#176;F</small>
          </div>
          <div className="MyName">
            <small>&copy; aimanski.com</small>
          </div>
          <div className="Add">
            <small>{moment(new Date()).format('h:mm a')}</small>
          </div>
        </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    temp: state.temp
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeTemp: (temp) => { dispatch(action.changeTemp(temp)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)