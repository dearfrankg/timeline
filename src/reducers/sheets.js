import * as types from 'constants/actionTypes'
import {sortByYear} from 'utils'

//
// const event = (state, action) => {
//   switch (action.type) {
//     case types.ADD_EVENT:
//       return {
//         id: action.id,
//         eventYear: action.eventYear,
//         eventName: action.eventName,
//         eventText: action.eventText,
//         eventImageUrl: action.eventImageUrl,
//         liked: false,
//         active: false
//       }
//
//     case types.UPDATE_EVENT:
//       if (state.id !== action.event.id) {
//         return state
//       }
//       return Object.assign({}, state, action.event)
//
//     case types.TOGGLE_LIKED:
//       if (state.id !== action.id) {
//         return state
//       }
//
//       return Object.assign({}, state, {
//         liked: !state.liked
//       })
//
//     default:
//       return state
//   }
// }
//
// const rows = (state = [], action) => {
//   switch (action.type) {
    // case types.ADD_EVENT:
    //   return [
    //     ...state,
    //     event(undefined, action)
    //   ]
    //
    // case types.DELETE_EVENT:
    //   return state.filter(e => (e.id !== action.id))
    //
    // case types.UPDATE_EVENT:
    //   return state.map(e =>
    //     event(e, action)
    //   )
    //
    // case types.TOGGLE_LIKED:
    //   return state.map(e =>
    //     event(e, action)
    //   )
//     default:
//       return state
//   }
// }

/*
initialState = {
  worksheets: {
    physics: [
      {id: 0, year: 1988, etc}
    ]
  }
}
*/
const initialState = {
  worksheets: {},
  activeEvent: {}
}
const sheets = (state = initialState, action) => {
  switch (action.type) {

    case types.SELECT_EVENT:
      return {
        ...state,
        activeEvent: action.event
      }

    case types.SELECT_PREVIOUS_EVENT:
      let events = state.worksheets[action.worksheetName].sort(sortByYear)
      let previousIndex = events.reduce((acc, curr, i) => {
        return (curr.id === action.event.id) ? i : acc
      }, -1)
      previousIndex = (previousIndex > 0) ? previousIndex - 1 : 0
      let activeEvent = events[previousIndex]
      return {
        ...state,
        activeEvent: activeEvent
      }

    case types.SELECT_NEXT_EVENT:
      events = state.worksheets[action.worksheetName].sort(sortByYear)
      let nextIndex = events.reduce((acc, curr, i) => {
        return (curr.id === action.event.id) ? i : acc
      }, -1)
      nextIndex = (nextIndex < events.length - 1) ? nextIndex + 1 : events.length - 1
      activeEvent = events[nextIndex]
      return {
        ...state,
        activeEvent: activeEvent
      }

    //
    // case types.ADD_EVENT:
    //   return [
    //     ...state,
    //     event(undefined, action)
    //   ]
    //
    // case types.DELETE_EVENT:
    //   return state.filter(e => (e.id !== action.id))
    //
    // case types.UPDATE_EVENT:
    //   return state.map(e =>
    //     event(e, action)
    //   )
    //
    // case types.TOGGLE_LIKED:
    //   return state.map(e =>
    //     event(e, action)
    //   )

    default:
      return state
  }
}

export default sheets
