import React, {Fragment} from 'react';

export default function componentName(props) {
  return (
    <Fragment>
      <div className="retweet">
        <div className="retweet-info-image">
          <img src={props.userImage} 
            alt={props.name} />
        </div>
        <div className="retweet-info-text">
          <div className="tweet-info-details">
            <p className="tweet-person-info"><b>{props.name}</b> <i> @{props.sreenName}</i> - {props.time}</p>
            <p className="tweet-text">{props.textContent}</p>
          </div>
          {props.media ? 
            <div className="tweet-image-content">
              <img src={props.media} alt={props.name}/>
            </div> : null }
        </div> 
      </div> 
    </Fragment>
  );
}
