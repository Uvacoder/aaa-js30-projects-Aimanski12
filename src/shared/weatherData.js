import {
  localTime,
  sunRiseSunSet,
  celciusConverter,
  farenheitConverter
} from './utility'
import moment from 'moment'

export const getDailyForecast = (daily) => {
  let dailyForecast = []
  for(let i in daily){
    if(daily[i].dt_txt.slice(11) === '00:00:00'){
      dailyForecast.push({
        day: moment(daily[i].dt_txt).format('ddd'),
        icon: daily[i].weather[0].icon,
        highTemp: {
          cel: celciusConverter(daily[i].main.temp_max),
          fah: farenheitConverter(daily[i].main.temp_max),
        },
        lowTemp: {
          cel: celciusConverter(daily[i].main.temp_min),
          fah: farenheitConverter(daily[i].main.temp_min),
        }
      })
    }
  }
  if(dailyForecast.length !== 5){
    dailyForecast.unshift({
      day: moment(daily[0].dt_txt).format('ddd'),
      icon: daily[0].weather[0].icon,
      highTemp: {
          cel: celciusConverter(daily[0].main.temp_max),
          fah: farenheitConverter(daily[0].main.temp_max),
        },
        lowTemp: {
          cel: celciusConverter(daily[0].main.temp_min),
          fah: farenheitConverter(daily[0].main.temp_min),
        }
    })
  }
  return ({
    dailyForecast: dailyForecast
  })

}


export const getDataWeather = (data, cityName) => {
  const cityForecast = {
    current: {
      city: cityName,
      icon: data.weather[0].icon,
      countryCode: data.sys.country,
      localTime: localTime(data.coord.lat, data.coord.lon),
      currentTemp: {
        cel: celciusConverter(data.main.temp),
        fah: farenheitConverter(data.main.temp)
      },
      desc: data.weather[0].description
    },
    weatherDesc: {
      left: {
        sunrise: sunRiseSunSet(data.coord.lat, data.coord.lon, data.sys.sunrise),
        low: {
          cel: celciusConverter(data.main.temp_min),
          fah: farenheitConverter(data.main.temp_min)
        },
        humidity: data.main.humidity,
        longitude: data.coord.lon,
        wind: data.wind.deg,
        visibility: data.visibility,
      },
      right: {
        sunset: sunRiseSunSet(data.coord.lat, data.coord.lon, data.sys.sunset),
        high: {
          cel: celciusConverter(data.main.temp_max),
          fah: farenheitConverter(data.main.temp_max)
        },
        pressure: data.main.pressure / 338.639,
        latitude: data.coord.lat,
        windSpeed: data.wind.speed,
        gendesc: data.weather[0].description,
      }
    }
  }
  return cityForecast
}
