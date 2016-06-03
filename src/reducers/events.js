import * as types from 'constants/actionTypes'

const event = (state, action) => {
  switch (action.type) {
    case types.ADD_EVENT:
      return {
        id: action.id,
        eventYear: action.eventYear,
        eventName: action.eventName,
        eventText: action.eventText,
        liked: false,
        active: false
      }
    case types.TOGGLE_LIKED:
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        liked: !state.liked
      })

    case types.SELECT_EVENT:
      if (state.id !== action.id) {
        return Object.assign({}, state, {
          active: false
        })
      } else {
        return Object.assign({}, state, {
          active: true
        })
      }

    default:
      return state
  }
}

const events = (state = [], action) => {
  switch (action.type) {
    case types.ADD_EVENT:
      return [
        ...state,
        event(undefined, action)
      ]

    case types.TOGGLE_LIKED:
      return state.map(e =>
        event(e, action)
      )

    case types.SELECT_EVENT:
      return state.map(e =>
        event(e, action)
      )

    default:
      return state
  }
}

export default events
