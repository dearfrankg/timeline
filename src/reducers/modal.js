import * as types from 'constants/actionTypes'

const modal = (state = false, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return true
    case types.CLOSE_MODAL:
      return false
    default:
      return state
  }
}

export default modal
