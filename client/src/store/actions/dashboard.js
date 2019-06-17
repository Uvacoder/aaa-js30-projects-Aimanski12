

import axios from 'axios'
import * as actionType from './actionTypes'

export const fetchDashboard = () => dispatch => {
  axios.get('/api/dashboard/')
    .then(res => {
      dispatch(setDashboard(res.data))
    })
    .catch(err => {
      console.log(err.response)
    })
}



export const createDashboard = (userData) => dispatch => {
  axios.post('/api/dashboard/create', userData)
    .then(res => {
      dispatch(setDashboard(res.data))
    })
    .catch(err => {
      console.log(err.response)
    })
}


export const setDashboard = (data) => {
  return {
    type: actionType.DASHBOARD_CREATE,
    payload: {
      dashboard: data.dashboard,
      mesg: data.mesg
    }
  }
}

export const editDashboard = (dashId, dashName) => dispatch => {
  axios.put('/api/dashboard/update/'+ dashId, {name: dashName})
    .then(res =>{
      dispatch(setDashboard(res.data))
    })  
    .catch(err => {
      console.log(err.response)
    })
}

export const deleteDashboard = (dashId) => dispatch => {
  axios.delete('/api/dashboard/delete/'+ dashId)
    .then(res =>{
        dispatch(setDashboard(res.data))
    })  
    .catch(err => {
      console.log(err.response)
    })
}


export const onLoadApp = () =>{
  
}