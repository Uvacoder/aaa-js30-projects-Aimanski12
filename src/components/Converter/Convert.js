import React from 'react';
import {formatNum} from '../../setupFunction'
import Select from './Select'


const Convert = (props) => {
  

  const calc = (thisC, otherC) => {
    let a = ((1 / thisC) * otherC).toFixed(2)
    return a
  }
  
  const change = (e, primary, thisC, otherC) => {
    props.change(e, primary, thisC, otherC)
  }
   

  return (
     <div className="currency">
      <div className="input-group mb-3">
        <Select 
          primary={props.isPrimary}
          name={props.data.name}
          names={props.data.names}
          change={(name, primary)=>props.select(name, primary)}
          />
      </div>
      <div className="curName">
        <p className="name_cur">
          {props.data ? props.data.thisCurrency.cSym : ''} {props.data ? props.data.thisCurrency.cCode : ''}
          </p>
        <img src={props.data ? props.data.flag : ''} alt="flag"/>
      </div>
      <div className="monetary">
        <input 
          type="text" 
          placeholder={1}
          value={props.data ? props.data.value : ''}
          onChange={(e)=>change(e, props.isPrimary, props.data.thisCurrency.cVal, props.data.otherCurrency.cVal)}/>
      </div>
      <div className="curr_nam">
        <p>{props.data ? props.data.thisCurrency.cName : ''}</p>
        <p><i>
          {props.data ? `
            ${props.data.thisCurrency.cSym} 1 ${props.data.thisCurrency.cCode} = 
            ${props.data.otherCurrency.cSym} ${calc(props.data.thisCurrency.cVal, props.data.otherCurrency.cVal)} ${props.data.otherCurrency.cCode}
          ` : ''}</i></p>
      </div>
    </div>
  );
}

export default Convert