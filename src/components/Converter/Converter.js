import React, {useState, useEffect} from 'react';
import {primary_c, getConverter} from '../../setupFunction'
import './Converter.css'

import Convert from './Components/Converter'

const Converter = (props) => {
  // countries from the select option
  const [country, setCountry] = useState(['United States of America', 'Germany'])
  // isTrue is for the useEffect not to render
  const [isTrue, setTrue] = useState(false)
  // there are the countries that hsas the data values
  const [sPrimary, setPrimary] = useState({})
  // set the secondary value
  const [sSecondary, setSecondary] = useState({})

  const calcCur = (primary, thisC, otherC, val) => {
    if(primary){
      if(thisC === 1) return 1
      return ((val / thisC) * otherC).toFixed(2)
    } else if (!primary){
      return ((val/thisC) * otherC).toFixed(2)
    }
  }

  useEffect(()=> {
    if(isTrue && sPrimary.name && sSecondary) {
      return 
    } else {
      if(props.countries.length > 0){
        let a = getConverter(props.countries, props.currency, country, primary_c)
        if(a.length > 0){
          a.map(b => {
            if(b.name === country[0]){
              let s = {
                ...b,
                value: calcCur(true, 1, 1, 1)
              }
              setPrimary(s)
            }
            if (b.name === country[1]) {
              let s = {
                ...b,
                value: calcCur(false, b.thisCurrency.cVal, b.otherCurrency.cVal, 1)
              }
              setSecondary(s)
            }
          })
        }
      }
    }
    
    setTrue(true)
  })


  const change = (e, primary, thisC, otherC) => {
    let val = parseFloat(e.target.value.replace(/,/g, ''))
    if(primary){
      if(e.target.value >=1){
        let a = calcCur(false, thisC, otherC, val)
        setPrimary({
          ...sPrimary,
          value: e.target.value
        })
        setSecondary({
          ...sSecondary,
          value: a
        })
      } else if (e.target.value > 1){
        let a = calcCur(false, thisC, otherC, val)
        setPrimary({
          ...sPrimary,
          value: e.target.value
        })
        setSecondary({
          ...sPrimary,
          value: a
        })
      }
    } else if(!primary){
      if (e.target.value >= 1) {
        let a = calcCur(false, thisC, otherC, val)
        setSecondary({
          ...sSecondary,
          value: e.target.value
        })
        setPrimary({
          ...sPrimary,
          value: a
        })
      } else if (e.target.value > 1) {
        let a = calcCur(false, thisC, otherC, val)
        setSecondary({
          ...sSecondary,
          value: e.target.value
        })
        setPrimary({
          ...sPrimary,
          value: a
        })
      }
    }
  }

  const select = (name, primary) => {
    if(primary){
      let a = country
      a[0] = name
      setCountry(a)
    } else if(!primary){
      let a = country
      a[1] = name
      setCountry(a)
    }
    
     let a = getConverter(props.countries, props.currency, country, primary_c)
    
      a.map(b => {
        if (b.name === country[0]) {
          let s = {
            ...b,
            value: calcCur(true, 1, 1, 1)
          }
          setPrimary(s)
        }
        if (b.name === country[1]) {
          let s = {
            ...b,
            value: calcCur(false, b.thisCurrency.cVal, b.otherCurrency.cVal, 1)
          }
          setSecondary(s)
        }
      })
    }

    let primary
    if(sPrimary.name){
      primary = <Convert 
                  data={sPrimary}
                  isPrimary={true}
                  select={(name, primary)=>select(name, primary)}
                  change={(e, p, d, o)=>change(e,p,d,o)}/>
    }

  let secondary
    if(sSecondary.name){
      secondary = <Convert 
                  data={sSecondary}
                  isPrimary={false}
                  select={(name, primary)=>select(name, primary)}
                  change={(e, p, d, o)=>change(e,p,d,o)}/>
    }
  
    let calcComponent;
    if(isTrue){
      calcComponent = (
          <div className="calc">
            {primary}
            {secondary}
          </div>

      )
    } 

  return (
    <div className="converter">
      <div className="container">

        <div className="header">
          <h1>Convert any currency</h1>
          <p>Select any currency that you want to convert. All rates are based from the European Central Bank exchange rates.</p>
        </div>
      
        {calcComponent}

      </div>
    </div>
  )
}
export default Converter