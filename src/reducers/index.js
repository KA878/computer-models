import { combineReducers } from 'redux'
import computers from './reducer'
import selectedComp from './selectedComp'

export default combineReducers({
  computers,
  selectedComp
})