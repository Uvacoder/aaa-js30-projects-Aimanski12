import React from 'react';
import {calcBase, calc} from '../../setupFunction'
import Fade from 'react-reveal/Fade';

const currency = (props) =>{

  const changeCurrency = (curr, name) => {
    props.changeCurrency(curr, name)
  }


  const calculate = (currency, primary) => {
    if(primary) return 1
    return calcBase(currency.base.value, currency.primary.value)
  }

  const calcCurrency = (base, prime) => {
    if(base.code === prime.code) return 1
    return calc(base, prime)
  }
  return (
    <Fade>
      <div 
        className={`main_converter ${props.country.primary ? 'primary' : ''}`}
        onClick={!props.country.primary ? 
          ()=>changeCurrency(props.country.currency.base, props.country.name) : null} >
        <div className="m_desc left">
          <div className="m_descTitle">
            <p className="name_cur">{props.country.alpha3Code}</p>
            <img src={props.country.flag} alt="flag"/>
          </div>
          <div className="name_desc">
            <p>{props.country.currency.base.name}</p>
          </div>
        </div>
        <div className="m_equals left">
          <h5>=</h5>
        </div>
        <div className="m_rates left">
          <p className="amount"><i>{props.country.currency.base.symbol} {calcCurrency(props.country.currency.base, props.country.currency.primary)} </i></p>
          <p className="amount_exchange">
            <i>
            {props.country.currency.base.symbol} 1 {props.country.currency.base.code} = {props.country.currency.primary.symbol}    {calculate(props.country.currency, props.country.primary)} {props.country.currency.primary.code}</i></p>
        </div>
      </div>
    </Fade>
  )
}

export default currency