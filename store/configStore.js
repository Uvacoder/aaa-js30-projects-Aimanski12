import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import image from './reducers/image'


let composeEnhancers = compose;

if(__DEV__){
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configStore = () => {
  return createStore(image, composeEnhancers(applyMiddleware(thunk)))
}

export default configStore