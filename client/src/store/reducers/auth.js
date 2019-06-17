
import * as actionType from '../actions/actionTypes'
import {updateObject, isEmpty} from '../../utils/Validation'

const initialState = {
  loading: false,
  isAuthenticated: false,
  authMessage: {},
  userData: false,
  user: {}
}


const getErrors = (state, data) => {
  return updateObject( state, {
    authMessage: {
      mesg: data.mesg,
      type: data.type
    },
    loading: false
  })
}

const authRegisterSuccess = (state, data) =>{
  return updateObject( state, {
    authMessage: {
      mesg: data.mesg, 
      type: data.type},
    loading: false
  })
}


const loading = (state) => {
  return updateObject( state, {
    loading: true
  })
}


const authLoginSuccess = (state, userData) => {
  return updateObject(state, {
    isAuthenticated: !isEmpty(userData),
    user: userData
  })
}

const authUserLogout = (state, action) => {
  return updateObject(state, {
    isAuthenticated: false,
    user: {}
  })
}

const userData = (state) => {
  return updateObject(state, {
    userData: true
  })
}

const authentication = (state = initialState, action) => {
  switch(action.type){
    case (actionType.LOADING): return loading(state);
    case (actionType.USER_DATA): return userData(state);
    case (actionType.AUTH_ERROR): return getErrors(state, action.payload);
    case (actionType.AUTH_REGISTER_SUCCESS): return authRegisterSuccess(state, action.payload);
    case (actionType.AUTH_SET_CURRENT_USER): return authLoginSuccess(state, action.payload);
    case (actionType.AUTH_USER_LOGOUT): return authUserLogout(state, action)
  default: return state
  }
}

export default authentication