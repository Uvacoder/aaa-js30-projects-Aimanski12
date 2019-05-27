import React from 'react';
import Input from '../components/Dashboard/InputArea'
import City from '../components/Dashboard/City'
import Footer from '../components/Dashboard/Footer'
import { Spring } from 'react-spring/renderprops'

const Dashboard = (props) => {
  return (
    <React.Fragment>
      <Spring
        from={{opacity: 0}}
        to={{opacity:1}}
        config={{duration: 1500}}>
          {props => 
            <div 
              style={props}
              className="container">
              <Input />
              <City />
              <Footer />
            </div>
          }
      </Spring>
    </React.Fragment>
  )
}


export default Dashboard

