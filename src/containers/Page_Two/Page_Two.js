import React, {Fragment} from 'react';
import './Page_Two.css'

import Navbar from '../../components/Navbar/Navbar'
import Select from '../../components/Select/Select'
import Currency from '../../components/Currency/Currency'
import Api from '../../components/Api/Api'
import Photo from '../../components/Photospace/Photospace'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'

const PageTwo = (props) => {

  return (
    <Fragment>
       <div className="header">
        <Navbar />

        <div className="currency">
          <div className="container">
            <Select 
              options={props.options}
              countries={props.countries}
              change={(val)=>props.change(val)} />
            <Currency 
              changeCurrency={(currency, name)=>props.changeCurrency(currency, name)}
              countries={props.countries} />
          </div>
        </div>

      </div>
      <Api />
      <Photo />
      <About />
      <Footer />
    </Fragment>
  )
}

export default PageTwo

