import React, {Component, Fragment} from 'react'

class Result extends Component{

  render(){
    let component = <Fragment>
                  <h1>Congratulations!</h1>
                  <p>You passed the level.</p>
                  <p
                    onClick={()=>this.props.click('start')}>Continue</p>

    </Fragment>
    if(!this.props.state.passed){
      component = <Fragment>
                    <h1>Sorry!</h1>
                    <p>You did not passes the quiz.</p>
                    <p onClick={()=>this.props.click('start')}>Play again</p>
                  </Fragment>
    }

    return (
      <Fragment>
        <div className="container">
          <div className="header result">
            {component}
          </div>
        </div>
      </Fragment>
  )}
}

export default Result