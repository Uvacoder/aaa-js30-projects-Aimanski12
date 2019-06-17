import React, {Component} from 'react'
import {connect} from 'react-redux'
import Fragment from '../../../utils/Fragment'
import {validation} from '../../../utils/Validation'
// import Spinner from '../../Spinner/Spinner'
import * as actions from '../../../store/actions/index'
import './Signin.css'

class Signin extends Component {

  constructor(){
    super();
    this.state = {
      email: {
        value: '',
        valid: null
      },
      password: {
        value: '',
        valid: null
      }
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e, input){
    const updatedState = this.state
    const toBeUpdated = updatedState[input]
    toBeUpdated.value = e.target.value
    toBeUpdated.valid = validation(input, toBeUpdated.value)
    this.setState({[this.state]: updatedState})
  }

  btnEnable(value){
    const checkifTrue = (val) => val === true 
    const valuet = value.splice(0,2)
      return !valuet.every(checkifTrue)
  }

  onSubmit(e){
    e.preventDefault(); 
    this.props.onloading()
    const newUser = {
      email: this.state.email.value,
      password: this.state.password.value
    }
    this.props.registerUser(newUser, this.props.history)
  }

  render() {

  let authRedirect = null
  if(this.props.isAuthenticated){
    this.props.history.push('/dashboard')
  }
    let btnDisable = []
    for(let i in this.state){
      btnDisable.push(this.state[i].valid)
    }

let signin = <div className="row"> 
              <div className="col-sm-4 offset-sm-4 Signup">
                <form onSubmit={(e)=>this.onSubmit(e)}>
                  <div className="form-group">
                    <h5>Signup
                      <small className="form-text text-muted">
                        {this.props.mesg ? this.props.mesg : ''}
                      </small>
                    </h5>
                    <input 
                      type="email" 
                      name="email"
                      className="form-control" 
                      placeholder="Enter email"
                      value={this.state.email.value}
                      onChange={(e)=>this.onChange(e, 'email')} />
                    <small className="form-text text-muted">
                      {this.state.email.valid === false ? 'Please enter a valid email' : null}
                    </small>
                  </div>
                  <div className="form-group">
                    <input 
                      type="password" 
                      name="password"
                      className="form-control" 
                      placeholder="Password"
                      value={this.state.password.value}
                      onChange={(e)=>this.onChange(e, 'password')} />
                    <small className="form-text text-muted">
                      {this.state.password.valid === false ? 'Password must be alphanumeric and atleast 6 characters!' : null}
                      </small>
                  </div>
                  <div className="col text-center">
                    <button 
                      disabled={this.btnEnable(btnDisable)}
                      type="submit" 
                      className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
              <div className="col-sm-4"></div>
            </div>    
    // signin = this.props.loading ? <Spinner /> : signin
    return (
      <Fragment>
        {authRedirect}
        {signin}
      </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    mesg: state.auth.authMessage.mesg,
    type: state.auth.authMessage.type,
    loading: state.auth.loading,
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    registerUser: (userData, history) => { 
      dispatch(actions.registerUser(userData, history))
    },
    onloading: () => {
      dispatch(actions.onloading())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin)