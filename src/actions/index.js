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

export const selectEvent = (id) => {
  return {
    type: types.SELECT_EVENT,
    id
  }
}

export const moveUp = () => {
  return {
    type: types.MOVE_UP
  }
}

export const moveDown = () => {
  return {
    type: types.MOVE_DOWN
  }
}
