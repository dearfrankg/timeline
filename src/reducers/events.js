import * as types from 'constants/actionTypes'

const event = (state, action) => {
  switch (action.type) {
    case types.ADD_EVENT:
      return {
        id: action.id,
        eventYear: action.eventYear,
        eventName: action.eventName,
        eventText: action.eventText,
        eventImageUrl: action.eventImageUrl,
        liked: false,
        active: false
      }

    case types.UPDATE_EVENT:
      if (state.id !== action.event.id) {
        return state
      }
      return Object.assign({}, state, action.event)

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

    case types.SELECT_PREVIOUS_EVENT:
      if (state.id !== action.id) {
        return Object.assign({}, state, {active: false})
      } else {
        return Object.assign({}, state, {active: true})
      }

    case types.SELECT_NEXT_EVENT:
      if (state.id !== action.id) {
        return Object.assign({}, state, {active: false})
      } else {
        return Object.assign({}, state, {active: true})
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

    case types.DELETE_EVENT:
      return state.filter(e => (e.id !== action.id))

    case types.UPDATE_EVENT:
      return state.map(e =>
        event(e, action)
      )

    case types.TOGGLE_LIKED:
      return state.map(e =>
        event(e, action)
      )

    case types.SELECT_EVENT:
      return state.map(e =>
        event(e, action)
      )

    case types.SELECT_PREVIOUS_EVENT:
      let previousIndex = state.reduce((acc, curr, i) => {
        return (curr.active) ? i : acc
      }, -1)
      if (previousIndex > 0) {
        previousIndex--
      }
      action.id = state[previousIndex].id
      return state.map(e =>
        event(e, action)
      )

    case types.SELECT_NEXT_EVENT:
      let nextIndex = state.reduce((acc, curr, i) => {
        return (curr.active) ? i : acc
      }, -1)
      if (nextIndex < state.length - 1) {
        nextIndex++
      }
      action.id = state[nextIndex].id
      return state.map(e =>
        event(e, action)
      )

    default:
      return state
  }
}

export default events
