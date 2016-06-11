import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import sheets from './sheets'
import UI from './UI'

const rootReducer = combineReducers({
  UI,
  sheets,
  form: formReducer
})

export default rootReducer
