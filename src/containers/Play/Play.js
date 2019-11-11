import React, {Component, Fragment} from 'react'
import Check from '../../components/Check/Check'

class Play extends Component{

  constructor(){
    super();
    this.state = {
      qNumber: 1,
      time: 15,
      score: 0,
      questions: {},
      answerComponent: '',
      answer: ''
    }
  }

  componentDidMount(){
    this.setState({
      questions: this.props.questions
    })
    this.timer()
  }

  timer(){
    setInterval(() => {
      if(this.state.time <= 0) return
      this.setState({time: this.state.time - 1})
    }, 1000);
  }

  checkAns(a){
    const answer = this.state.questions[this.state.qNumber - 1].correct_answer
    if(a === answer){
      this.setState({
        answer: answer,
        answerComponent: 'correct',
        score: this.state.score + 1,
        time: -1
      })
    } 
    if(a !== answer){
      this.setState({
        answer: answer,
        answerComponent: 'wrong',
        time: -1
      })
    }
  }
  
  continue(){
    let passed;
    if(this.state.qNumber === 10){
      this.state.score <= 6 ? passed = 'failed' : passed = 'passed'
      this.props.finished(passed)
    } else {
      this.setState({
        time: 15,
        answer: '',
        answerComponent: '',
        qNumber: this.state.qNumber + 1
      })
    }
  }


  render(){
    let qText;
    if(this.state.questions.length > 0){
      qText = this.state.questions[this.state.qNumber - 1].question
    }

    let questions = <Fragment>
                      <div className="contents">
                        <h3>Question {this.state.qNumber}:</h3>
                        <h3 className='question'>{decodeURIComponent(qText)}</h3>
                      </div>
                      <Check 
                        outOfTime={this.state.time}
                        answerComponent={this.state.answerComponent}
                        continue={()=>this.continue()}
                        checkAns={(a)=>this.checkAns(a)}
                        answer={this.state.answer}/>
                    </Fragment>

    return (
      <Fragment>
        <div className="container">
          <div className="header">
            <h1>Tralse</h1>
            <div className="row">
              <div className="col-md-4">
                <h5>Level: <b>{this.props.level}</b></h5>
              </div>
              <div className="col-md-4">
                <h5>Time left: <b>{this.state.answer === "True" ? 0 : this.state.answer === "False" ? 0 : this.state.time}</b></h5>
              </div>
              <div className="col-md-4">
                <h5>Score: <b>{this.state.score}</b></h5>
              </div>
            </div>
          </div>

          {questions}
        </div>
      </Fragment>
   )}
}

export default Play