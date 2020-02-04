import React from 'react';
import './Currency.css'
import {calcBase, calc} from '../../setupFunction'

const Currency = (props) => {

  const changeCurrency = (curr, name) => {
    props.changeCurrency(curr, name)
  }
  const calculate = (currency, primary) => {
    if (primary) return 1
    return calcBase(currency.base.value, currency.primary.value)
  }
  const calcCurrency = (base, prime) => {
    if (base.code === prime.code) return 1
    return calc(base, prime)
  }
    
  let currencyList = []
   let primary;
   if (props.countries.length > 0) {
      currencyList = props.countries.map((country, i) => {
        if (!country.primary) {
          return ( 
              <div className="col-md-6" key={i}>
                <div
                  className={`main_converter ${country.primary ? 'primary' : ''}`}
                  onClick={!country.primary ? ()=>changeCurrency(country.currency.base, country.name) : null} 
                  >
                  <div className="left">
                    <div className="country">
                      <p className="cur_name">
                        {country.alpha3Code}</p>
                      <img src={country.flag} alt="flag"/>
                    </div>
                    <div className='country_cur'>
                      <p>{country.cur}</p>
                    </div>
                  </div>
                  <div className="center">
                    <h5>=</h5>
                  </div>
                  <div className="right">
                    <p className="amount">
                      {country.currency.base.symbol} {calcCurrency(country.currency.base, country.currency.primary)} {country.currency.base.code}</p>
                    <p className="amount_exchange">
                <i>{country.currency.base.symbol} 1 {country.currency.base.code} = {country.currency.primary.symbol}    {calculate(country.currency, country.primary)} {country.currency.primary.code}</i></p>
                  </div>
                </div>
              </div>
            )}
          }
        )

      primary = props.countries.map((count, i) => {
        if (count.primary) {
          return ( 
              <div className="col-md-6" key={i}>
                <div
                  className={`main_converter ${count.primary ? 'primary' : ''}`}
                  onClick={!count.primary ? ()=>changeCurrency(count.currency.base, count.name) : null} 
                  >
                  <div className="left">
                    <div className="country">
                      <p className="cur_name">
                        {count.alpha3Code}</p>
                      <img src={count.flag} alt="flag"/>
                    </div>
                    <div className='country_cur'>
                      <p>{count.cur}</p>
                    </div>
                  </div>
                  <div className="center">
                    <h5>=</h5>
                  </div>
                  <div className="right">
                    <p className="amount">
                      {count.currency.base.symbol} {calcCurrency(count.currency.base, count.currency.primary)} {count.currency.base.code}</p>
                    <p className="amount_exchange">
                <i>{count.currency.base.symbol} 1 {count.currency.base.code} = {count.currency.primary.symbol}    {calculate(count.currency, count.primary)} {count.currency.primary.code}</i></p>
                  </div>
                </div>
              </div>

            )}
          }
        )
      }

  return (
    <div className="main">
      <div className="row">
        {primary}
        {currencyList}
      </div>
    </div>
  )
}
export default Currency