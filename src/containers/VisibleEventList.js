import { connect } from 'react-redux'
import EventList from '../components/EventList'
import * as actions from 'actions'

const mapStateToProps = (state) => {
  const worksheet = state.sheets.worksheets[state.UI.timelineSelect]
  const visibleEventList = worksheet.filter((event) => {
    const showAll = (state.UI.visibilityFilter === 'SHOW_ALL')
    return showAll || event.liked === 'TRUE'
  })
  const activeEvent = state.sheets.activeEvent || {}
  const timelineSelected = state.UI.timelineSelect
  return {
    events: visibleEventList,
    activeEvent,
    timelineSelected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpKey: (timelineSelected) => dispatch(actions.selectPreviousEvemt(timelineSelected)),
    onDownKey: (timelineSelected) => dispatch(actions.selectNextEvent(timelineSelected)),
    onEventClick: (event) => dispatch(actions.selectEvent(event)),
    onEventDblClick: (event) => {
      dispatch(actions.setModalEvent(event))
      dispatch(actions.openModal())
    },
    onHeartClick: (id) => dispatch(actions.toggleLiked(id)),
    onDeleteClick: (id) => dispatch(actions.deleteEvent(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList)
