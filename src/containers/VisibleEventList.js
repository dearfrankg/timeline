import { connect } from 'react-redux'
import EventList from '../components/EventList'
import * as actions from 'actions'
import {sortByYear} from 'utils'

const mapStateToProps = (state) => {
  const worksheet = state.sheets.worksheets[state.UI.timelineSelect]
  const visibleEventList = worksheet.filter((event) => {
    const showAll = (state.UI.visibilityFilter === 'SHOW_ALL')
    return showAll || event.liked === 'TRUE'
  }).sort(sortByYear)
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
    onUpKey: (timelineSelected, event) => dispatch(actions.selectPreviousEvemt(timelineSelected, event)),
    onDownKey: (timelineSelected, event) => dispatch(actions.selectNextEvent(timelineSelected, event)),
    onEventClick: (event) => dispatch(actions.selectEvent(event)),
    onEventDblClick: (event) => {
      dispatch(actions.setModalEvent(event))
      dispatch(actions.openModal())
    },
    onHeartClick: (id) => dispatch(actions.toggleLiked(id)),
    onDeleteClick: (event, timelineSelected) => dispatch(actions.deleteEvent(event, timelineSelected))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList)
