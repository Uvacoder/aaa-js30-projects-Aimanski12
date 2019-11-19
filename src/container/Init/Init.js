import React from 'react'
import Spinner from '../../component/Spinner/Spinner'

export default (props) => {

  let btn = props.spinner ? <Spinner /> : 
            <button
              onClick={()=>props.click('play')}>Test me now!</button>

  return (
    <div className="init">
      <h1>Knowledge Quiz</h1>
      <p>This app tests how smart you are and how good you are in general information and current events. You are given 15 seconds to answer each question of 10. Each question is in multiple choice. You have to get at least 6 correct answers to proceed to the next level.</p>
      {btn}
    </div>
  )
}
