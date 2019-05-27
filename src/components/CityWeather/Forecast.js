import React from 'react'
import {connect} from 'react-redux'
import {visibilityCompute} from '../../shared/utility'
import { Spring } from 'react-spring/renderprops'


const Forecast = (props) => {
  return (
    <React.Fragment>
      <Spring
        from={{opacity: 0}}
        to={{opacity: 1}}
        config={{delay: 800, duration: 800}}>
        {spring => 
        
      <div className="Bottom" style={spring}>
        <div className="BottomSection">
          <div className="left">
            <div>
              <p className="label">Sunrise</p>
              <p className="value">{props.city.weatherDesc.left.sunrise}</p>
            </div>
            <div>
              <p className="label">Low</p>
              <p className="value">{props.temp === 'celcius' ?
                props.city.weatherDesc.left.low.cel :
                props.city.weatherDesc.left.low.fah}&#176;</p>
            </div>
            <div>
              <p className="label">Humidity</p>
              <p className="value">{props.city.weatherDesc.left.humidity}</p>
            </div>
            <div>
              <p className="label">Longitude</p>
              <p className="value">{props.city.weatherDesc.left.longitude}</p>
            </div>
            <div>
              <p className="label">Wind</p>
              <p className="value">{props.city.weatherDesc.left.wind}&#176;</p>
            </div>
            <div>
              <p className="label">Visibility</p>
              <p className="value">{visibilityCompute(props.city.weatherDesc.left.visibility) 
               } mi</p>
            </div>
          </div>

          <div className="right">
            <div>
              <p className="label">Sunset</p>
              <p className="value">{props.city.weatherDesc.right.sunset}</p>
            </div>
            <div>
              <p className="label">High</p>
              <p className="value">{props.temp === 'celcius' ?
                props.city.weatherDesc.right.high.cel:
                props.city.weatherDesc.right.high.fah}&#176;</p>
            </div>
            <div>
              <p className="label">Pressure</p>
              <p className="value">{Math.round(props.city.weatherDesc.right.pressure.toFixed(2)*10)} inHg</p>
            </div>
            <div>
              <p className="label">Latitude</p>
              <p className="value">{props.city.weatherDesc.right.latitude}</p>
            </div>
            <div>
              <p className="label">Wind speed</p>
              <p className="value">{props.city.weatherDesc.right.windSpeed} mph</p>
            </div>
            <div>
              <p className="label">Gen Desc</p>
              <p className="value desc">{props.city.weatherDesc.right.gendesc}</p>
            </div>
          </div>
          
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
export default connect(mapStateToProps)(Forecast)
