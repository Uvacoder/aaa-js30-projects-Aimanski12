import React, {Component} from 'react';
import {rRev} from './anim'

import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      animDivs: 0,
      divs: 15,
      animNum: 0,
      selectedAnim: {}
    }
  }

  componentDidMount(){
    let d = []
    for(let x=0; x< this.state.divs; x++){
      d.push({
        el: x,
        anim: false
      })
    }
    this.setState({selectedAnim: d})
  }

  ranCol(n){
    return {
      norm: `${this.ranNum(n)}, ${this.ranNum(n)}, ${this.ranNum(n)}`,
      hov: `${this.ranNum(n) - 10}, ${this.ranNum(n) - 10}, ${this.ranNum(n) - 10}`
    }
  }

  ranNum(n){
    return Math.floor(Math.random() * 60) + n
  }

  async addAnim(){
    let n = Math.floor(Math.random() * rRev.length)
    await this.setState({animNum: this.state.animNum + 1})
    let selected = this.state.selectedAnim
    let sel = selected.map((s, i) => {
                if(i === this.state.animNum - 1){
                  let b = {
                    el: s.el,
                    anim: rRev[n],
                    bColor: this.ranCol(180),
                    tColor: this.ranCol(60)

                  }
                 return b
                } else {
                  return s
                }
              })
    this.setState({selectedAnim: sel})
  }

  mouseOv(e, color){
    e.target.style.background = `rgb(${color.hov})`
    if(e.target.children.length > 0){
      e.target.children[0].style.background = `rgb(${color.hov})`
    }
  }

  mouseOut(e, color, textColor) {
    e.target.style.background = `rgb(${color.norm})`
    if(e.target.children.length > 0){
      e.target.children[0].style.background = `rgb(${color.norm})`
    }
  }

  remove(index){
    this.setState({animNum: this.state.animNum - 1})
    let div = this.state.selectedAnim
    div = this.state.selectedAnim.filter((d, i)=>{
      return i !== index
    })
    div.push({
      el: 15,
      anim: false
    })
    this.setState({selectedAnim: div})
  }

  div(){
    let divs = []
      if(this.state.selectedAnim.length > 0){
        this.state.selectedAnim.map((s, i) => {
          if(s.anim){
            divs.push(
              <div 
                className='animat' 
                key={i} 
                style={{background: `rgb(${s.bColor.norm})`}}
                onMouseOver={(e)=>this.mouseOv(e, s.bColor)}
                onMouseOut={(e)=>this.mouseOut(e, s.bColor)}
                onClick={()=>this.remove(i)}>
                  <s.anim.anim >
                    <h1 
                      style={{color: `rgb(${s.tColor.norm})`}} >{s.anim.title}</h1>
                  </s.anim.anim>
              </div>
          )} else {
            divs.push(
              <div className='animat' key={i}></div>
            )
          }
      })
    }
    return divs
  }


  render(){

    let el = this.div()

    return (

    
    <div className="App">
        <div className='container'>
          <div className="wrap">
            <div className="anim">
              <div 
                className="animat prime"
                onClick={()=>this.addAnim()}>
                <span>
                  <i className="fas fa-plus fa-4x"></i>
                </span>
                <p>add animation</p>
              </div>
              {el}
            </div>
          </div>
        </div>   

    </div>

  )}
}

export default App;
