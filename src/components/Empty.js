import React from 'react';
import Fade from 'react-reveal/Fade';


export default function componentName(props) {
  return (
    <Fade>
      <div className="empty">
        {
          props.text === 'none' ?
            <h1>Please enter a title.</h1> : 
              props.text === 'no books found' ?
                <h1>No book found on that title.</h1> : null

        }
      </div>
    </Fade>
  );
}
