
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'


import auth from './store/reducers/auth'
import dashboard from './store/reducers/dashboard'

const rootReducer = combineReducers({
  auth, dashboard
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
