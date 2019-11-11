import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import {levels, category, token, setURL} from './assets/config'

import Game from './containers/Game/Game'
import Play from './containers/Play/Play'
import Result from './containers/Result/Result'

class App extends Component {

  constructor(){
    super();
    this.state = {
      sCategory: 9,
      sLevel: 'any',
      categories: {},
      level: levels,
      gameState: 'start',
      gameLevel: 1,
      token: '',
      passed: false,
      questions: {}
    }
  }


  async componentDidMount(){
    this.setState({
      categories: await category(),
      token: await token()
    })
  }

  supchanged(el, name){
    if(name === 'category'){
      this.setState({sCategory: el})
    }
    if(name === 'level'){
      this.setState({sLevel: el})
    }
  }

  
  getData = async () => {
    let url = setURL(this.state.sCategory, this.state.sLevel, this.state.token)
    let res = await axios.get(url.url)
    
    if(res.data.response_code !== 0){
      res = await axios.get(url.backupURL)
        if(res.data.results){
          this.setState({ 
            questions: res.data.results,
            gameState: 'play' 
          })      
        }
    }
    if (res.data.results) {
      this.setState({
        questions: res.data.results,
        gameState: 'play'
      })
    }
  }

  changeGameState(c){
    if(c === 'play') {
      this.getData()
      return 
    }
    if(c === 'failed'){ 
      this.setState({
        gameState: 'end',
        passed: false
      })
    }
    if(c === 'passed'){ 
      this.setState({
        gameState: 'end',
        passed: true,
        gameLevel: this.state.gameLevel + 1
      })
    }
    if (c === 'start') {
      this.setState({
        gameState: 'start',
        passed: false
      })
    }

  }

  render(){
    let game =  this.state.gameState === 'play' ? 
                  <Play 
                    questions={this.state.questions}
                    level={this.state.gameLevel}
                    finished={(c, score)=>this.changeGameState(c, score)}/> : 

                this.state.gameState === 'end' ? 
                  <Result 
                    state={this.state}
                    click={(c)=>this.changeGameState(c)}
                    /> :

                this.state.gameState === 'start' ? 
                  <Game 
                    categories={this.state.categories}
                    level={this.state.level}
                    selectedLevel={this.state.sLevel}
                    selectedCategory={this.state.sCategory}
                    click={(c)=>this.changeGameState(c)}
                    supchanged={(el, name)=>this.supchanged(el, name)}/> : null


    return (
      <div className="App">
        <div className="App-header">
        {game}
      </div>
    </div>
  )}
}

export default App;
