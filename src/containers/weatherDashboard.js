import React from 'react'
import GenDesc from '../components/CityWeather/GenDesc'
import FiveDaysWeather from '../components/CityWeather/Days'
import DayForecast from '../components/CityWeather/Forecast'

const weatherDashboard = (props) => {



  return (
    <React.Fragment>
      <GenDesc />
      <FiveDaysWeather/>
      <DayForecast/>
    </React.Fragment>
  )
}

export default weatherDashboard
