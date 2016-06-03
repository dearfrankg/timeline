import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import events from './events'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  events,
  visibilityFilter,
  form: formReducer
})

export default rootReducer
