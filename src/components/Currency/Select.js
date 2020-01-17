import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Select extends Component {

  constructor(){
    super();
    this.state ={
      option: '',
      countryOptions: {}
    }
  }



  samp(e){
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
        )
      })
    



    return (
      <div className="select">
        <div className="button div">
          <Link to='/country'>
            <p>Country Info</p>
          </Link>
        </div>


        <div className="option div">
          <div className="input-group mb-3">
            <select 
              className="custom-select"
              onChange={(e)=>this.samp(e)}>
              {b}
            </select>
          </div>

        </div>


        <div className="button div">
          <Link to='/converter'>
            <p>Calculator</p>
          </Link>
        </div>
      </div>
    )
  }

}

export default Select