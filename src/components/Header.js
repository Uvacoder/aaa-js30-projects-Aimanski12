import React, {Component} from 'react';

class Header extends Component {

  constructor(){
    super();
    this.state = {
      btnValue: '',
      btnOn: false
    }

  }

  change(e){
    this.setState({btnValue: e.target.value})
    if(this.state.btnValue.length > 1){
      this.setState({btnOn: true})
    }
  }

  render(){

    return (
      <div className="header flex">
      <div className="headContainer">
        <h1 className="">Giff Searcher</h1>
        <div className="input-group mb-3 btnInput">
          <input 
            type="text" 
            className="form-control"  
            onChange={(e)=>this.change(e)}
            placeholder="Enter any giff name" />
          <div className="input-group-append">
            <button 
              className="input-group-text" 
              disabled={this.state.btnOn ? false : true}
              onClick={()=>this.props.click(this.state.btnValue)}>Search</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default Header
