import React from 'react'
import {connect} from 'react-redux'
import * as action from '../../store/actions/index'
import { Spring } from 'react-spring/renderprops'

const GenDesc = (props) => {
const iconUrl = 'https://openweathermap.org/img/w/'

  return (
    <React.Fragment>
      <Spring 
        from={{opacity: 0}}
        to={{opacity: 1}}
        config={{duration: 800}}>
        {spring => 
          <div className="Top" style={spring}>
            <div className="LogoArea">
              <img src={iconUrl+props.city.current.icon+'.png'} alt={props.city.current.desc}/>
            </div>
            <div className="TopDesc">
              <button 
                type="button" 
                className="close"
                onClick={props.view}>
                <span aria-hidden="true">&times;</span>
              </button>
              <h5 className="province">{props.city.current.city}</h5>
              <h5 className="country">{props.city.current.countryCode}</h5>
              <p className="time">{props.city.current.localTime}</p>
              <h5 className="temp">{props.temp === 'celcius' ? 
                    props.city.current.currentTemp.cel:
                    props.city.current.currentTemp.fah}&#176;</h5>
              <p className="weatherDesk">{props.city.current.desc}</p>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    view: () => { dispatch(action.viewAll()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenDesc)