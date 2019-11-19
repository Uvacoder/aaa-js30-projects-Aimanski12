import React, {Component} from 'react';
import axios from 'axios'
import './App.css';


import Init from './container/Init/Init'
import Play from './container/Play/Play'
import Result from './component/Result/Result'

class App extends Component {
  constructor(){
    super();
    this.state = {
      page: 'init',
      spinner: false,
      questions: {},
      level: 1,
      passed: false,
      token: ''
    }
  }

  shuffle(a) {
    return a.sort(() => Math.random() - 0.5)
  }

  start (){
    this.setState({spinner: !this.state.spinner})
    setTimeout(()=>{
      this.getUrl()  
    }, 300)
  }
    
  async getToken(){
    await axios.get('https://opentdb.com/api_token.php?command=request')
      .then(res => {
        this.setState({token: res.data.token})
      })
  }

  getUrl = async () => {
    if(this.state.token !== ''){
      this.getToken()
    }
    
    
    let url = `https://opentdb.com/api.php?amount=10&type=multiple&token=${this.state.token}&encode=url3986`
    
    let res = await axios.get(url)
    
    if (res.data.results) {
      let questions = res.data.results.map((q)=>{
        let opt = q.incorrect_answers
        opt.push(q.correct_answer)
        return {
          question: q.question,
          correctAns: q.correct_answer,
          options: this.shuffle(opt)
        }
      })
      this.setState({
        questions,
        page: 'play',
        spinner: false
      })
    }
  }

  finished(a){
    if(a === 'pass') {
      this.setState({page: 'result', passed: true})
    } else if(a === 'fail'){
      this.setState({page: 'result'})
    }
  }

  play(){
    this.getUrl()
  }

  render(){
    let page = this.state.page === 'init' ? 
                  <Init 
                    click={(a)=>this.start(a)}
                    spinner={this.state.spinner} /> : 
                    
               this.state.page === 'play' ?
                  <Play 
                    questions={this.state.questions}
                    level={this.state.level}
                    finished={(a)=>this.finished(a)} /> : 

               this.state.page === 'result' ? 
                  <Result 
                    pass={this.state.passed}
                    play={()=>this.play()}/> : null

    return (
      <div className="App">
        <div className="container">
          {page}
      </div>
    </div>
  )}
}

export default App;



