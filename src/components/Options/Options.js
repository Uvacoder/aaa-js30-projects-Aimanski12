import React, {Component} from 'react'

class Options extends Component {
  



    render(){
      let cat = ''      
      cat = this.props.categories.length > 1 ?
        this.props.categories.map((s, i) => 
          <option 
              key={i} 
              value={s.id}
              >{s.name}</option>
          ) : null

    
    return (
      <div className="input-group mb-3 divOps">
        <select 
          className="custom-select"
          onChange={(e)=>this.props.supchanged(e.target.value, this.props.name)}>
          {cat}
        </select>
        <div className="input-group-append divLabel">
          <label className="input-group-text" >
            {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</label>
        </div>
      </div>
  )}
}

export default Options
