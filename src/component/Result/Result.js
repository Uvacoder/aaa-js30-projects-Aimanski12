import React, {Fragment} from 'react';

export default function (props){
  let text;
  if(props.pass){
    text = <Fragment>
              <h2>Congratulations!</h2>
              <p>You passed the level!</p>
              <button 
                onClick={()=>props.play()}>Play Again!</button>
            </Fragment> 
  } else {
    text = <Fragment>
              <h2>Sorry!</h2>
              <p>You did not pass the quiz.</p>
              <button
                onClick={()=>props.play()}>Try Again!</button>
            </Fragment> 
  }

  return (
   <div className="result">
     {text}
    </div>
  );
}
