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

// CRUD OPS FOR EVENTS

export const addEvent = (event, worksheetName) => {
  return (dispatch) => {
    dispatch(addEventRequest())
    return GoogleSpreadsheet.addRow(event)
      .then(() => {
        dispatch(addEventSuccess(event, worksheetName))
      })
  }
}

export const addEventRequest = () => {
  return {
    type: types.ADD_EVENT_REQUEST
  }
}

export const addEventSuccess = (event, worksheetName) => {
  return {
    type: types.ADD_EVENT_SUCCESS,
    event,
    worksheetName
  }
}

export const readEvents = () => {
  return (dispatch) => {
    dispatch(readEventsRequest())
    return GoogleSpreadsheet.readRows()
      .then((json) => {
        dispatch(readEventsSuccess(json))
      })
  }
}

export const readEventsRequest = () => {
  return {
    type: types.READ_EVENT_REQUEST
  }
}

export const readEventsSuccess = () => {
  return {
    type: types.READ_EVENT_SUCCESS
  }
}

export const updateEvent = (event, worksheetName) => {
  return (dispatch) => {
    dispatch(updateEventRequest())
    return GoogleSpreadsheet.updateRow(event)
      .then((json) => {
        dispatch(updateEventSuccess(event, worksheetName))
      })
  }
}

export const updateEventRequest = () => {
  return {
    type: types.UPDATE_EVENT_REQUEST
  }
}

export const updateEventSuccess = (event, worksheetName) => {
  return {
    type: types.UPDATE_EVENT_SUCCESS,
    event,
    worksheetName
  }
}

export const deleteEvent = (event) => {
  return (dispatch) => {
    dispatch(deleteEventRequest())
    return GoogleSpreadsheet.deleteRow(event)
      .then((json) => {
        dispatch(deleteEventSuccess(event))
      })
  }
}

export const deleteEventRequest = () => {
  return {
    type: types.DELETE_EVENT_REQUEST
  }
}

export const deleteEventSuccess = () => {
  return {
    type: types.DELETE_EVENT_SUCCESS
  }
}
