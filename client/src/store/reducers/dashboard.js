
import * as actionType from '../actions/actionTypes'
import {updateObject} from '../../utils/Validation'

const initialState = {
  dashboard: {}
}



const dashboardCreate = (state, payload) => {
  return updateObject(state, {
    ...payload
  })
}





const authentication = (state = initialState, action) => {
  switch (action.type) {
  
    case (actionType.DASHBOARD_CREATE): return dashboardCreate(state, action.payload);
    
    default:
      return state
  }
}

export default authentication