import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import events from './events'
import visibilityFilter from './visibilityFilter'
import modal from './modal'

const rootReducer = combineReducers({
  events,
  visibilityFilter,
  form: formReducer,
  modal
})

export default rootReducer
