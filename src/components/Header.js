import React, {Component} from 'react';

class Header extends Component{

  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  change(e){
    this.setState({text: e.target.value})
  }

  click(){
    if(this.state.text === ''){
      return 
    } 
    this.props.click(this.state.text)
  }

  render(){

    return (
      <div className="header">
        <div className="title">
          <h1>Photo Searcher</h1>
          <p>All images in this app are taken from 
              <a 
                href='https://www.pexels.com/' 
                rel='noopener noreferrer'
                target="_blank"
                className='pexels'> pexels.com</a></p>
        </div>
        <div className="input-group mb-3 inputArea">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search Photos" 
            value={this.state.text}
            onChange={(e)=>this.change(e)} />
          <div className="input-group-append inputBtn">
            <span 
              className="input-group-text" 
              id="basic-addon2"
              onClick={()=>this.click()}><i className="fas fa-search"></i></span>
          </div>
        </div>
      </div>
  )}
}

export default Header
