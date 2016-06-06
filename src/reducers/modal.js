import * as types from 'constants/actionTypes'

const modal = (state = false, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return {...state, showModal: true}

    case types.CLOSE_MODAL:
      return {...state, showModal: false}

    case types.SET_MODAL_EVENT:
      return {...state, modalEvent: action.event}

    default:
      return state
  }
}

export default modal
