
import {setDashboard} from './dashboard'
import axios from  'axios'

export const addList = (dashId, list) => dispatch => {
  axios.post('/api/lists/create', {dashId, list})
    .then(res => {
      dispatch(setDashboard(res.data))
    })
    .catch(err => {
      console.log(err.response)
    })
}


export const editList = (dashId, id,  text) => dispatch => {
  axios.put('/api/lists/update/'+dashId, {
    dashId: id,
    text: text
  })
    .then(res => {
      dispatch(setDashboard(res.data))
    })
    .catch(err => {
      console.log(err.response)
    })
}



export const updateListStatus = (id, listId) => dispatch => {
  axios.put('/api/lists/updateStatus/'+id, {listId} )
  .then(res => {
    dispatch(setDashboard(res.data))
  })
  .catch(err => {
    console.log(err.response)
  })
}


export const deleteList = (id, listId) => dispatch => {
  axios.delete('/api/lists/delete/'+id+'/'+listId )
    .then(res => {
      dispatch(setDashboard(res.data))
    })
    .catch(err => {
      console.log(err.response)
    })
}