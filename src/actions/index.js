import * as types from 'constants/actionTypes'

let nextId = 0

export const addEvent = (fields) => {
  return {
    type: types.ADD_EVENT,
    id: nextId++,
    ...fields
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleLiked = (id) => {
  return {
    type: types.TOGGLE_LIKED,
    id
  }
}
