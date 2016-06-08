import { connect } from 'react-redux'
import EventList from '../components/EventList'
import * as actions from 'actions'

const getVisibleEvents = (events, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return events
    case 'SHOW_LIKED':
      return events.filter(t => t.liked)
  }
}

const mapStateToProps = (state) => {
  return {
    events: getVisibleEvents(state.events, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEventClick: (id) => dispatch(actions.selectEvent(id)),
    onEventDblClick: (event) => {
      dispatch(actions.setModalEvent(event))
      dispatch(actions.openModal())
    },
    onUpKey: () => dispatch(actions.selectPreviousEvemt()),
    onDownKey: () => dispatch(actions.selectNextEvent()),
    onHeartClick: (id) => dispatch(actions.toggleLiked(id)),
    onDeleteClick: (id) => dispatch(actions.deleteEvent(id)),
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList)
