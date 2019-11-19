import React, {Component} from 'react';

class Options extends Component {

  render(){
    
    return (
      <div className='opt'>
        <div className="btn">
          <input type="radio"  
            name='option'
            value={this.props.option}
            onChange={()=>this.props.change(this.props.option)}/>
          <label>{decodeURIComponent(this.props.option)}</label>
        </div>
      </div>
  )}
}

export default Options