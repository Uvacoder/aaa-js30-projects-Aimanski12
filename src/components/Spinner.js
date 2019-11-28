import React from 'react';

export default function componentName(props) {

  let spin = props.search === 'no search' && !props.spin ?
              <div className="giffSelected">
                <h1>Please enter giff search</h1>
              </div> :
            props.spin === true ?
              <div className='spinner'>
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
              </div> : null
  return (
    spin
  );
}
