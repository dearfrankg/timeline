import * as types from 'constants/actionTypes'
import { getId } from 'utils'
import createGoogleSpreadsheet from 'services/GoogleSpreadsheet'

const GoogleSpreadsheet = createGoogleSpreadsheet()
//
// UI VISIBILITY_FILTER
//
export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}

//
// UI MODAL
//

export const setModalEvent = (event) => {
  return {
    type: types.SET_MODAL_EVENT,
    event
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

//
// UI SELECT_TIMELINE
//

export const selectTimeline = (worksheetName) => {
  return {
    type: types.SELECT_TIMELINE,
    worksheetName
  }
}

//
// SHEET SELECT_EVENT
//

export const selectEvent = (event) => {
  return {
    type: types.SELECT_EVENT,
    event
  }
}

export const selectPreviousEvemt = (worksheetName, event) => {
  return {
    type: types.SELECT_PREVIOUS_EVENT,
    worksheetName,
    event
  }
}

export const selectNextEvent = (worksheetName, event) => {
  return {
    type: types.SELECT_NEXT_EVENT,
    worksheetName,
    event
  }
}

//
// SHEET TOGGLE_LIKED
//

export const toggleLiked = (id) => {
  return {
    type: types.TOGGLE_LIKED,
    id
  }
}

// export const addEvent = (fields) => {
//   return {
//     type: types.ADD_EVENT,
//     id: getId(),
//     ...fields
//   }
// }
//
// export const deleteEvent = (id) => {
//   return {
//     type: types.DELETE_EVENT,
//     id
//   }
// }
//
// export const updateEvent = (event) => {
//   return {
//     type: types.UPDATE_EVENT,
//     event
//   }
// }

export const add = (event, worksheetName) => {
  return (dispatch) => {
    dispatch(addRequest())
    return GoogleSpreadsheet.addRow(event)
      .then(() => {
        dispatch(addSuccess(event, worksheetName))
      })
  }
}

export const addRequest = () => {
  return {
    type: types.ADD_REQUEST
  }
}

export const addSuccess = (event, worksheetName) => {
  return {
    type: types.ADD_SUCCESS,
    event,
    worksheetName
  }
}

export const fetchRead = () => {
  return (dispatch) => {
    dispatch(requestRead())
    return GoogleSpreadsheet.readRows()
      .then((json) => {
        dispatch(receiveRead(json))
      })
  }
}
export const fetchUpdate = (event) => {
  return (dispatch) => {
    dispatch(requestUpdate())
    return GoogleSpreadsheet.updateRow(event)
      .then((json) => {
        dispatch(receiveUpdate(event))
      })
  }
}
export const fetchDelete = (event) => {
  return (dispatch) => {
    dispatch(requestDelete())
    return GoogleSpreadsheet.deleteRow(event)
      .then((json) => {
        dispatch(receiveDelete(event))
      })
  }
}


export const requestRead = () => {
  return {
    type: types.REQUEST_READ
  }
}

export const requestUpdate = () => {
  return {
    type: types.REQUEST_UPDATE
  }
}

export const requestDelete = () => {
  return {
    type: types.REQUEST_DELETE
  }
}

export const receiveRead = (events) => {
  return {
    type: types.RECEIVE_READ,
    events
  }
}

export const receiveUpdate = (event) => {
  return {
    type: types.RECEIVE_UPDATE,
    event
  }
}

export const receiveDelete = (event) => {
  return {
    type: types.RECEIVE_DELETE,
    event
  }
}
