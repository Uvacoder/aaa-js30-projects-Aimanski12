import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'

import {pexels} from './config'
import Photo from './components/Photo'
import Photos from './components/Photos'



class App extends Component{


  constructor(){
    super();
    this.state = {
      selected_photo: {},
      photos: {},
      selected: 'none'
    }
  }

  search = async (text) => {
    let photos = await pexels(text)
    if(photos.result){
      this.setState({
        photos: photos.photos,
        selected: 'all'
      })
    }
  }

  selPhoto(photo){
    this.setState({
      selected_photo: photo,
      selected:'selected'
    })
  }

  goBack(){
    this.setState({
      selected: 'all'
    })
  }

  render(){
    let noSelected = <div className="noSearch">
                      <h1>No search photos</h1>
                    </div>
    return(
      <div className="App">
        <div className="AppContainer">

          {/* header starts here */}
          <Header 
            click={(t)=>this.search(t)}/>

          {/* body starts here */}
          <div className="body">
            <div className="container">

              {this.state.selected === 'none' ? 
                noSelected : this.state.selected === 'all' ? 
                  <Photos 
                    photos={this.state.photos}
                    selPhoto={(p)=>this.selPhoto(p)} /> : this.state.selected === 'selected' ? <Photo 
                                  photo={this.state.selected_photo}
                                  back={()=>{this.goBack()}}/> : null
              }

            </div>
          </div>

        </div>
      </div>
    )
  }
}


export default App;
