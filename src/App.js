import React, {useState, useEffect} from 'react';
import './App.css';

import Currency from './containers/Currency'
import Converter from './containers/Converter'
import Country from './containers/CountryInfo'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {getData} from './setupInitialData'

import {init_Country, primary_c, initial_countries, format_data} from './setupFunction'

const App = () => {

  const [all_countries, setCountries] = useState([])
  const [currency, setCurrency] = useState([])
  const [primary, setPrimary] = useState([])
  const [isData, haveData] = useState(false)
  const [initialCountry, initCountry] = useState({})
  
  const data = async () => {
  // get all data from countries
    let data = await getData()
  // set currency to the state
    setCurrency(data.currency)
  // set all countries
    setCountries(data.new_countries)
  // filter initial country
    let new_country = 
    init_Country(data.new_countries, data.currency, initial_countries, primary_c)
  // set initial countries
    initCountry(new_country)
  // setPrimary
    setPrimary(primary_c)
  }
    
  useEffect(()=>{
    if(isData) return
    haveData(true)
    data() 
  })
    
  const changeCurrency = (s_currency, name) =>{
    let n_country = initialCountry.map(c => {
      return {
        ...c,
        primary: c.name === name ? true : false,
        currency: {
          primary: s_currency,
          base: c.currency.base
        }
      }
    })

    initCountry(n_country)
    setPrimary(s_currency)
  }
    
  const change = (val) => {
    let n_country = all_countries.filter(c => {
      return c.name === val
    })

    let a = format_data(n_country[0], primary, currency)

    let b = initialCountry.concat({...a})
    initCountry(b)
  }




  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Currency 
              options={all_countries}
              change={(val)=>change(val)}
              countries={initialCountry}
              changeCurrency={(currency, name)=>changeCurrency(currency, name)} />
          </Route>
          <Route path='/converter'>
            <Converter 
              countries={all_countries}
              currency={currency} />  
          </Route>
          <Route path='/country'>
            <Country 
              countries={initialCountry} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
