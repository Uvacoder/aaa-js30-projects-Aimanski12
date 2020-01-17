import React from 'react';

const Select = (props) => {


  // console.log(props)

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
    <select 
      className="custom-select" 
      id="inputGroupSelect01" 
      onChange={(e)=>change(e)}>
      <option value={props.name}>{props.name}</option>
      {select}
    </select>
  );
}

export default Select