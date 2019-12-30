import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class Header extends Component{

  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  change(e){
    this.setState({
      text: e.target.value
    })
  }

  search(){
    if(this.state.text === ''){
      return
    }
    this.props.click(this.state.text)
  }
  render(){
    return (
      <Fade>
      <div className="header">
        <div className="title">
          <h1>Book Searcher</h1>
          <p>All books in this app are taken from 
              <a 
                href={`https://www.google.com/search?tbm=bks&q=trending+books`}
                rel='noopener noreferrer'
                target="_blank"
                className='pexels'> Google Books</a> API.</p>
        </div>
        <div className="input-group mb-3 inputArea">
          <input 
            type="text" 
            className="form-control" 
            value={this.state.text}
            placeholder="Enter book title"
            onChange={(e)=>this.change(e)} />
          <div className="input-group-append inputBtn">
            <span 
              className="input-group-text"
              onClick={()=>this.search()}><i className="fas fa-search"></i></span>
          </div>
        </div>
      </div>
      </Fade>
  )}
}


export default Header;
