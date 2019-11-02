import React, {Component} from 'react'

class Input extends Component{
  render(){
    return (
      <div className='inputbtn'>
        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Movie Title"
            onChange={(e)=>this.props.change(e)}/>
          <div className="input-group-append search-btn">
            <span className="input-group-text" id="basic-addon2">Search Movie</span>
          </div>
        </div>
      </div>
    )
  }
}
export default Input