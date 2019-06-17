

import * as actionType from  './actionTypes'
import setAuthToken from '../../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import {createLog} from '../../utils/Validation'
import axios from 'axios'

export const registerUser = (userData, history) => dispatch =>{
  axios.post('/api/users/register', userData)
    .then(res => {
      dispatch(authSuccess(history, res.data))
    })
    .catch(err=> {
      dispatch({
        type: actionType.AUTH_ERROR,
        payload: err.response.data
      })
    })
  }
  
export const authSuccess = (history, data) => {
  history.push('/login')
  return {
    type: actionType.AUTH_REGISTER_SUCCESS,
    payload: {
      mesg: data.mesg,
      type: data.type
    }
  }
}

export const onloading = () => {
  return {
    type: actionType.LOADING
  }
}

export const loginUser = (userData, history) => dispatch => {
  axios.post('/api/users/login', userData)
    .then(res => {
      // set response data to a token
      const {token} = res.data;
      // save token to localstorage
      localStorage.setItem('jwtToken', token)
      // set token in the request header
      setAuthToken(token)
      // decode the token to extract user id
      const decode = jwt_decode(token)
      // dispatch to create save the token in the state
      // console.log(decode)
      dispatch(setCurrentUser(decode))
    })
    .catch(err => {
      dispatch({
        type: actionType.AUTH_ERROR,
        payload: err.response.data
      })
    })
  return {
    type: actionType.LOADING
  }
}

export const setCurrentUser = (decoded)=> {
  return {
    type: actionType.AUTH_SET_CURRENT_USER,
    payload: decoded
  }
}



export const logoutUser = () => {
  localStorage.removeItem('jwtToken')
  return {
    type: actionType.AUTH_USER_LOGOUT
  }
}

export const getUser = () => dispatch =>{
  const user = createLog()
  axios.post('/api/users/getUser', {user: user})
    .then(res => {
      dispatch({
        type: actionType.USER_DATA
      })
    })
    .catch(err=> {
      dispatch({
        type: actionType.USER_DATA
      })
    })
}