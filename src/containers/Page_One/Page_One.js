import React, {Fragment} from 'react';
import './Page_One.css'

import Navbar from '../../components/Navbar/Navbar'
import Middle from '../../components/Middle/Middle'
import Api from '../../components/Api/Api'
import Photo from '../../components/Photospace/Photospace'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'

const PageOne = () => {
  return (
    <Fragment>
      <div className="header">
        <Navbar />
        <Middle />
      </div>
      <Api />
      <Photo />
      <About />
      <Footer />
    </Fragment>
  )
}
export default PageOne
