import * as types from 'constants/actionTypes'

const initialState = {
  visibilityFilter: 'SHOW_ALL',
  modal: {
    showModal: false,
    modalEvent: {}
  },
  timelineSelect: ''
}

const UI = (state = initialState, action) => {
  state = Object.assign({}, initialState, state)
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return {...state, visibilityFilter: action.filter}

    case types.OPEN_MODAL:
      return {...state, modal: {
        ...state.modal,
        showModal: true
      }}

    case types.CLOSE_MODAL:
      return {...state, modal: {
        ...state.modal,
        showModal: false
      }}

    case types.SET_MODAL_EVENT:
      return {...state, modal: {
        ...state.modal,
        modalEvent: action.event
      }}

    case types.SELECT_TIMELINE:
      return {...state, timelineSelect: action.worksheetName}

    default:
      return state
  }
}

export default UI
