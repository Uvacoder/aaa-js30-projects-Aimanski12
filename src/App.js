import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'



import Navigation from './components/Navigation/Navigation'
import Scan from './containers/Scan/Scan'
import History from './containers/History/History'
import './App.css';

class App extends Component {



  render(){
    let routes = (
      <Switch>
        <Route exact path='/history' component={History}/>
        <Route exact path='/' component={Scan}/>
      </Switch>
    )
    return (
    <BrowserRouter>
      <div className="bkg">
        <div className="container">

          <Navigation />
        
          {routes}

        </div>
      </div>
    </BrowserRouter>
  )};
}

export default App;
