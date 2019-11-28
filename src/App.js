import React, {Component} from 'react';
import './App.css';
import {url1, url2} from './config'
import Axios from 'axios';

import Spinner from './components/Spinner'
import Giffs from './components/Giffs'
import Footer from './components/Footer'
import GiffSelected from './components/GiffSelected'
import Header from './components/Header'

class App extends Component{


  constructor(){
    super();
    this.state = {
      giffs: {},
      body: 'no search',
      spinner: false,
      giffSelected: {}
    }
  }

  
  async search(val){
    let giffs = {}
    this.setState({spinner: true})

    await Axios.get(`${url1}${val}${url2}`)  
      .then(res => {
        if(res.status === 200) {
          let data = res.data.data  
          console.log(data)
          giffs = data.map(d => {
            return {
              image_url: d.images.fixed_height.url,
              created: d.import_datetime,
              embed_url: d.embed_url,
              title: d.title,
              uploaded: d.source_tld === '' ? 'Unknown' : d.source_tld
            }
          })
          this.setState({
            giffs: giffs,
            body: 'search',
            spinner: false

          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  selectGiff(giff){
    let selGiff = this.state.giffs.filter(g => {
      return g.title === giff
    })
    this.setState({
      body: 'giffs Selected',
      giffSelected: selGiff
    })
  }


  render(){


    
    return (
      <div className="App">
        <div className="top">

          {/* header */}
          <Header
            click={(val)=>this.search(val)} />

          {/* body */}
          <div className="body">
            { this.state.body === 'no search' ? 
                <Spinner 
                  search={this.state.body}
                  spin={this.state.spinner}/> : 
              this.state.body === 'search' ? 
                <Giffs 
                  giffs={this.state.giffs}
                  click={(giff)=> this.selectGiff(giff)}/> :
              this.state.body === 'giffs Selected' ? 
                <GiffSelected 
                  goBack={()=> this.setState({body: 'search'})}
                  giff={this.state.giffSelected}/> : null}
          </div>

          {/* footer */}
          <Footer />

        </div>
      </div>
      );
    }
  }
  
  export default App;

