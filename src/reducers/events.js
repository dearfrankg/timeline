import * as types from 'constants/actionTypes'

const event = (state, action) => {
  switch (action.type) {
    case types.ADD_EVENT:
      return {
        id: action.id,
        year: (action.year && action.year.length) ? action.year : ('19' + Math.floor(Math.random() * 90 + 10)),
        name: (action.name && action.name.length) ? action.name : 'Some Special Event',
        text: (action.text && action.text.length) ? action.text : 'Lorem ipsum dolor sit amet, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        liked: false
      }
    case types.TOGGLE_LIKED:
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        liked: !state.liked
      })

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

    default:
      return state
  }
}

export default events
