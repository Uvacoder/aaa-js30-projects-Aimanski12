import React, {Fragment} from 'react';
import Select from './Select'

const Converter = (props) => {

  const calc = (thisC, otherC) => {
    let a = ((1 / thisC) * otherC).toFixed(4)
    return a
  }
  
  const change = (e, primary, thisC, otherC) => {
    props.change(e, primary, thisC, otherC)
  }

  return (
    <Fragment>
      <div className="calc_container">
        <Select 
          primary={props.isPrimary}
          name={props.data.name}
          names={props.data.names}
          change={(name, primary)=>props.select(name, primary)} />
        <div className='labels'>
          <div className='labels_left'> 
            <h1>
              {props.data ? props.data.thisCurrency.cSym : ''} {props.data ? props.data.thisCurrency.cCode : ''}
            </h1>
            <img src={props.data ? props.data.flag : ''} alt="flag"/>
          </div>
          <div className='labels_right'> 
          <p>{props.data? props.data.name : ''}</p>
          </div>
        </div>
        <div className="input_amount">
          <input 
            type='number' 
            placeholder='1'
            value={props.data ? props.data.value : ''}
            onChange={(e)=>change(e, props.isPrimary, props.data.thisCurrency.cVal, props.data.otherCurrency.cVal)}/>
        </div>
        <div className="currency_ta">
          <p>{props.data ? props.data.thisCurrency.cName : ''}</p>
          <p>{props.data ? `
            ${props.data.thisCurrency.cSym} 1 ${props.data.thisCurrency.cCode} = 
            ${props.data.otherCurrency.cSym} ${calc(props.data.thisCurrency.cVal, props.data.otherCurrency.cVal)} ${props.data.otherCurrency.cCode}
          ` : ''}</p>
        </div>
      </div>
    </Fragment>
  )
}


export default Converter