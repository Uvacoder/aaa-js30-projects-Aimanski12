import React from 'react';

export default function componentName(props) {

  let el = props.searched.map(search => {
    return (
      <h5
        onClick={()=>props.click(search)}>{'#'+search} </h5>
    )
  })

  return (
    <div className="trends">
      {el}
    </div>
  );
}
