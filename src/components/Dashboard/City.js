import React from 'react'
import * as action from '../../store/actions/index'
import {connect} from 'react-redux'
import { Transition } from 'react-spring/renderprops'

const City = (props) => {



let city = null
if(props.cityWeather.length !== 0){
  city = props.cityWeather.map((weather, i)=>{
  return <li 
          key={i}
          className="list-group-item">
          <div className="MainCity"
              onClick={()=>props.view(weather)}
              >
          <small>{weather.current.localTime}</small>
          <h5>{weather.current.city}</h5>
        </div>
        <div className="MainTemp">
          <h5>{props.temp === 'celcius' ? 
                weather.current.currentTemp.cel : 
                weather.current.currentTemp.fah}&#176;</h5>
        </div>
        <button 
          className="close" 
          aria-label="Close"
          onClick={()=>props.deleteCity(weather.current.city)}>
          <span aria-hidden="true">x</span>
        </button>
      </li> 
  })
} else {
  city =<li className="list-group-item noCity">
          <h5>No city selected.</h5>
        </li> 
}

  return (
    <React.Fragment>
      <Transition
        items={city}
        keys={item => item.key}
        from={{opacity: 0}}
        enter={{opacity: 1}}
        leave={{opacity: 0}}
        config={{duration: 500}}
        >
          {item => props => 
            <div className="list-group list-group-flush ListOfCity" style={props}>
              {item}
            </div>
          }
      </Transition>
    </React.Fragment>
  )
}

  // <div className="list-group list-group-flush ListOfCity">
  //   {city}
  // </div>

const mapStateToProps = (state, ownProps) => {
  return {
    cityWeather: state.cityweather,
    temp: state.temp,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    view: (cityWeather) => {dispatch(action.viewAll(cityWeather))},
    deleteCity: (city) => {dispatch(action.deleteCity(city))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
