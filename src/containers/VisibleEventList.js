import { connect } from 'react-redux'
import { toggleLiked } from '../actions'
import EventList from '../components/EventList'

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
    onEventClick: (id) => {
      dispatch(toggleLiked(id))
    }
  }
}

const VisibleEventList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList)

export default VisibleEventList