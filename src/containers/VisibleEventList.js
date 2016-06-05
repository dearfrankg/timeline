import { connect } from 'react-redux'
import { toggleLiked, selectEvent } from '../actions'
import EventList from '../components/EventList'
import * as actions from 'actions'

const getVisibleEvents = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_AVERAGE':
      return todos.filter(t => t.completed)
    case 'SHOW_LIKED':
      return todos.filter(t => !t.completed)
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
    onUpKey: () => dispatch(actions.selectPreviousEvemt()),
    onDownKey: () => dispatch(actions.selectNextEvent()),
    onHeartClick: (id) => dispatch(actions.toggleLiked(id)),
    onDeleteClick: (id) => dispatch(actions.deleteEvent(id))
  }
}

const VisibleEventList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList)

export default VisibleEventList
