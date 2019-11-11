import React, {Component, Fragment} from 'react'
import Header from '../../components/Header/Header'
import Options from '../../components/Options/Options'

class Game extends Component{

  click(){
    this.props.click('play')
  }


  render(){
    return (
      <Fragment>
        <div className="container">
          <Header />
          <div className='selectOptions'>
            <h1>Select game options</h1>
            <Options 
              categories={this.props.categories}
              selected={this.props.selectedCategory}
              name={'category'}
             supchanged={(el, name)=>this.props.supchanged(el, name)}/>
            <Options 
              categories={this.props.level}
              selected={this.props.selectedLevel}
              supchanged={(el, name)=>this.props.supchanged(el, name)}
              name={'level'}/>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={()=>this.click()}>Start Game</button>
          </div>
        </div>
      </Fragment>
  )}
}

export default Game