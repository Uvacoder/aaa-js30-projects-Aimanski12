import React from 'react'
import {connect} from 'react-redux'
import { Spring } from 'react-spring/renderprops'

const Days = (props) => {
  
const iconUrl = 'https://openweathermap.org/img/w/'

  let days = props.city.dailyForecast.map(day=>{
      return <div
            key={day.day} >
            <h5>{day.day}</h5>
            <div className="img">
              <img src={iconUrl+day.icon+'.png'} alt="" />
            </div>
            <div className="dailyTemp">
              <small>{props.temp === 'celcius' ? 
                      day.highTemp.cel : 
                      day.highTemp.fah}&#176;</small> {' '}
              {/* <small>{props.temp === 'celcius' ? 
                      day.lowTemp.cel : 
                      day.lowTemp.fah}&#176;</small> */}
            </div>
          </div>
  })


  return (
    <React.Fragment>
      <Spring
        from={{opacity: 0}}
        to={{opacity:1}}
        config={{delay: 400, duration: 800}}>
        {spring => 
          <div className="MidSection" style={spring}>
            <div className="SectionDiv">
              {days}
            </div>
          </div>
        }
      </Spring>
    </React.Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    city: state.citySelected,
    temp: state.temp
  }
}

export default connect(mapStateToProps)(Days)