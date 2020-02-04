
export const initial_countries = ['Germany', 'Australia', 'United Kingdom of Great Britain and Northern Ireland', 'India', 'China', 'Russian Federation', 'United States of America']

export const primary_c = {
  code: 'USD',
  symbol: '$',
  name: 'United States of America',
  value: 1
}

export const init_Country = (countries, currency, init_c, primary) => {

  let new_country = countries.filter(c => {
    for (let i in init_c) {
      if (init_c[i] === c.name) return c
     }
  })
  

  let n_country = new_country.map(c => {
    return format_data(c, primary, currency)
  })
  return n_country
}


export const format_data = (country, primary, currency) => {
  let base = getValue(country.currencies[0].code, currency)
  let prime = getValue(primary.code, currency)

  
  return {
  currency: {
      primary: prime,
      base: {
        ...base,
        symbol: country.currencies[0].symbol,
      }
    },
  primary: country.name === primary.name ? true : false,
  name: country.name,
  internetDomain: country.topLevelDomain[0],
  alpha2Code: country.alpha2Code,
  alpha3Code: country.alpha3Code,
  callingCode: country.callingCodes[0],
  capital: country.capital,
  region: country.region,
  cur: country.currencies[0].name,
  subregion: country.subregion,
  population: country.population,
  lat: country.latlng[0],
  lng: country.latlng[1],
  landArea: country.area,
  langauge: country.languages[0].name,
  flag: country.flag
  }
}

export const calcBase = (base, prime) => {
  let a = (prime / base).toFixed(4)
  return a
}


export const calc = (base, prime) => {
  if(prime.code === 'USD') {
    return base.value
  } 

  if(prime.code !== 'USD'){
    let a = ((1 / prime.value) * base.value).toFixed(4)
    return a
  }
}

export const getValue = (base, currency) => {
  for (let i in currency) {
    if (currency[i].code === base) {
      return currency[i]
    }
  }
}



export const getConverter = (countries, currency, initial, primary) => {

  let a = countries.filter(c => {
    if(c.name === initial[0]){
      return c
    }
    if (c.name === initial[1]) {
      return c
    }
  })

  let countryName = countryList(countries, initial)




  // this a return a function that has details about two preselectee currency
  let b = a.map(c => {
    let cur1 = ew(a, c.currencies[0].code, currency)
    let cur2 = qw(c.currencies[0].code, currency)
    return {
      name: c.name,
      flag: c.flag,
      thisCurrency: {
        cCode: cur2[0].code,
        cName: cur2[0].name,
        cVal: cur2[0].value,
        cSym: c.currencies[0].symbol
      },
      otherCurrency: {
        cCode: cur1.code,
        cName: cur1.name,
        cVal: cur1.value,
        cSym: cur1.symbol
      },
      names: countryName
    }
  })
  // console.log(b)
  return b
}



const qw = (code, currency) => {
  let a = currency.filter(b => {
    if(b.code === code)
     return b
  })
  return a
}


const ew = (country, code, currency) => {
  let a = country.filter(b => {
    if(b.currencies[0].code !== code)  return b
  })
  let y 
  currency.filter(p => {
    if(p.code === a[0].currencies[0].code){
      y = {
        ...p,
        name: p.name,
        symbol: a[0].currencies[0].symbol
      }
    }
  })

  return y
}


export const formatNum = (num) => {
    let n = String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')

  return n
}


const countryList = (country, name) => {
  let a = country.filter(b => {
    if (b.name !== name[0]) {
      return b
    }
    if (b.name !== name[1]) {
      return b
    }
  })

  return getNames(a)
}

const getNames = (a) => {
  let b = a.map(c => {
    return c.name
  })
  return b
}
