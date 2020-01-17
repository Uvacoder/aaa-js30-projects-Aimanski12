import React, {Fragment} from 'react';
import Spinner from '../components/Spinner'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import {formatNum} from '../setupFunction'

export default function componentName(props) {

  let country;
  if(props.countries.length === undefined){
    country = <Spinner />
  } else if( props.countries.length > 0 ) {
    let pri_country = props.countries.filter(c => {
      return c.primary === true
    })
    country = (
    <Fragment>
    <Fade>
      <div className="country">
        <div className="header">
          <h1>Country Information</h1>
        </div>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>{pri_country[0].name}</td>
            </tr>
            <tr>
              <th scope="row">Alpha 2 Code</th>
              <td>{pri_country[0].alpha2Code}</td>
            </tr>
            <tr>
              <th scope="row">Alpha 3 Code</th>
              <td>{pri_country[0].alpha3Code}</td>
            </tr>

            <tr>
              <th scope="row">Country Flag</th>
              <td><img src={pri_country[0].flag} alt="flag"/></td>
            </tr>

            <tr>
              <th scope="row">Calling Code</th>
              <td>+ {pri_country[0].callingCode}</td>
            </tr>

            <tr>
              <th scope="row">Capital City</th>
              <td>{pri_country[0].capital}</td>
            </tr>

            <tr>
              <th scope="row">Internet Domain</th>
              <td>{pri_country[0].internetDomain}</td>
            </tr>

            <tr>
              <th scope="row">Language</th>
              <td>{pri_country[0].langauge}</td>
            </tr>

            <tr>
              <th scope="row">Geo Coordinates</th>
              <td>{pri_country[0].lat} Latitude, {pri_country[0].lng} Longitude</td>
            </tr>

            <tr>
              <th scope="row">Region</th>
              <td>{pri_country[0].region}</td>
            </tr>

            <tr>
              <th scope="row">Sub Region</th>
              <td>{pri_country[0].subregion}</td>
            </tr>

            <tr>
              <th scope="row">Population</th>
              <td>{formatNum(pri_country[0].population)}</td>
            </tr>

            <tr>
              <th scope="row">Land Area</th>
              <td>{formatNum(pri_country[0].landArea)} sqm</td>
            </tr>


            <tr>
              <th scope="row">Currency</th>
              <td>{pri_country[0].cur}</td>
            </tr>

            <tr>
              <th scope="row">Currency Symbol</th>
              <td>{pri_country[0].currency.base.symbol}</td>
            </tr>

          </tbody>
        </table>
      </div>

      <div className="goback">
        <Link to='/'>
          <p>Go Back</p>
        </Link>
      </div>
      </Fade>
      </Fragment>
      )
  }


  return (
    <div className="App-container app-cont">
        {country}
    </div>
  );
}
