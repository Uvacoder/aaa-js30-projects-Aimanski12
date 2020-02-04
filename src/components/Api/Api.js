import React from 'react';
import './Api.css'


const Api = () => {
  
  return (
    <div className="api_resource">
      <div className="container">
        <h1>API Resources</h1>
        <div className="api">
          <div className="api_desc">
            <h2>Frankfurter API</h2>
            <p>Frankfurter is a free and open-source currency data API that tracks  reference exchange rates published by the European Central Bank. You only need to sign-up for a free API key that you can use for your entire application.</p>
              <button><a href='https://www.frankfurter.app/' target='_blank'>View API</a> </button>
          </div>
          <div className="api_desc">
            <h2>Rest Countries API</h2>
            <p>REST Countries is a free GET query API that allows the user to query informations about certain countries. It provides lots of data that is very useful for programmming projects and many more.</p>
            <button><a href='https://restcountries.eu/' target='_blank'>View API</a> </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Api