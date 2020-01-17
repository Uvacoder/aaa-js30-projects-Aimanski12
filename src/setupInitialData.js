import axios from 'axios'
import {primary_c} from './setupFunction'

export const getData = async () => {

  // this url is free to use
  let currencyUrl = `https://api.frankfurter.app/currencies`
  // this url is free to use
  let currencyValue = `https://api.frankfurter.app/latest?from=USD`
  // this url is free to use
  let qcountries = `https://restcountries.eu/rest/v2/all`

  // get all currency
    let currency_names = await query(currencyUrl)
  // get all country
    let countries = await query(qcountries)
  // get all currency val
    let currencyVal = await query(currencyValue)
  if(!currency_names || !countries || !currencyVal) return false

  // return result
    return filterResult(currency_names, countries, currencyVal.rates)
}

// query function
const query = async (url) => {
  let result = await axios.get(url)
    .then(res => {
      // fallback if there is any error
      if(res.status !== 200) return false
      if(res.status === 200) return res.data
    })
    .catch(err => {
      // fallback if there is any error
      if(err) return false
    })
  return result
}

// filter the result
const filterResult = async (currencies, countries, rates) => {

  // new set of countries based on the currency
  let new_countries = await countries.filter(country => {
    for (let i in currencies){
      if(i === country.currencies[0].code) return country
    }
  })

  // create currency data
  let currency = generate_currency(currencies, rates)
  
  return {new_countries, currency}
}


// sort all currencies and rates and put in one data
const generate_currency = (currencies, rates) => {
  let h = []
  for (let i in currencies) {
    for (let x in rates) {
      if (i === x) {
        h.push({
          code: i,
          name: currencies[i],
          value: rates[i]
        })
      }
    }
  }
    h.push(primary_c)
  return h 
}


