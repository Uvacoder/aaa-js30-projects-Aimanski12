import React from 'react';

const Select = (props) => {
  let select;

  if(props.names.length > 1){
    select = props.names.map((n, i) => {
      return (
        <option 
          key={i}
          value={n}>{n}</option>)
    })
  }

  const change = (e) => {
    props.change(e.target.value, props.primary)
  }

  return (
    <div className="input-group mb-3 select">
      <select 
        className="custom-select"
        onChange={(e)=>change(e)}>
        <option value={props.name}>{props.name}</option>
        {select}
      </select>
    </div>
  )
}

export default Select
