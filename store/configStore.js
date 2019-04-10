import {createStore, compose, applyMiddleware} from 'redux'
import lists from './reducers/lists'

let composeEnhancers = compose;

if(__DEV__){
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configStore = () => {
  return createStore(lists, composeEnhancers(applyMiddleware()))
}

export default configStore;