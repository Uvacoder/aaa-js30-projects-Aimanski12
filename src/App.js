import React, {useEffect} from 'react';
import * as action from './store/actions/index'
import {connect} from 'react-redux'
import Dashboard from './containers/dashboard'
import WeatherDashboard from './containers/weatherDashboard'
import './App.css';

const App = (props) => {

  useEffect(()=>{
    props.initSearch()
  }, [])

    return (
      <div className="App">
        <div className="Main">
          {props.viewAll ? <Dashboard/> : <WeatherDashboard /> }
        </div>
      </div>
    );
}

const mapStateToProps = (state, ownProps) => {
  return {
    viewAll: state.viewAll
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initSearch: () => {
      dispatch(action.userLog())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
