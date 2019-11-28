import React from 'react';

export default function componentName(props) {


  let giffs = props.giffs.map((giff, i )=> {
    return (
              <div 
                className="col-md-3 giffItem"
                key={i}>
                <div 
                  className="card samp"
                  onClick={()=> props.click(giff.title)}>
                  <img className="card-img-top" 
                  src={giff.image_url} alt="samp" />
                  <div className="card-body">
                    <p className="card-text">{giff.title}</p>
                  </div>
                </div>
              </div>
    )
  })
  
  return (
    <div className="row">
      {giffs}
    </div>
  );
}

