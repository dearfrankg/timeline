import * as types from 'constants/actionTypes'
import { getId } from 'utils'

export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}

export const addEvent = (fields) => {
  return {
    type: types.ADD_EVENT,
    id: getId(),
    ...fields
  }
}

export const deleteEvent = (id) => {
  return {
    type: types.DELETE_EVENT,
    id
  }
}

export const updateEvent = (event) => {
  return {
    type: types.UPDATE_EVENT,
    event
  }
}

export const setModalEvent = (event) => {
  return {
    type: types.SET_MODAL_EVENT,
    event
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

export const selectPreviousEvemt = () => {
  return {
    type: types.SELECT_PREVIOUS_EVENT
  }
}

export const selectNextEvent = () => {
  return {
    type: types.SELECT_NEXT_EVENT
  }
}

export const openModal = () => {
  return {
    type: types.OPEN_MODAL
  }
}

export const closeModal = () => {
  return {
    type: types.CLOSE_MODAL
  }
}
