import React, {Component} from 'react';

class Select extends Component{

  constructor(){
    super();
    this.state = {
      option: '',
      countryOptions: {}
    }
  }

  samp(e) {
    this.props.change(e.target.value)
  }

  render(){
    let a = []
    if(this.props.options.length > 0){
      if(this.props.countries.length > 0){
        this.props.options.map(op => {
          let b = true
          this.props.countries.map(c => {
            if(c.name === op.name){
              b = false
            }
          })
          if(b) a.push(op)
        })
      } 
    }

    let b = a.map((x, i )=> {
      return (
        <option 
          key={i}
          value={x.name}>{x.name}</option>
      )}
    )

    return(
      <div className="main_desc">
        <h2>Choose your currency</h2>
        <p>All rates are referrenced from European Central Bank published exchanged rates.</p>
        <div className="input-group mb-3 select">
          <select 
            className="custom-select" 
            onChange={(e)=>this.samp(e)} >
            {b}
          </select>
        </div>
      </div>
    )
  }
}

export default Select
