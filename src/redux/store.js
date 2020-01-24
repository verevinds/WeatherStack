import { createStore } from 'redux'
import CombineReducers from './reducer'

const store = createStore(CombineReducers)

export default store