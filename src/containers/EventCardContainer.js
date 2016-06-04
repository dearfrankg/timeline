import { connect } from 'react-redux'
import EventCard from 'components/EventCard'

const mapStateToProps = (state) => {
  const events = state.events
  const activeEvent = events.filter((e) => {
    if (e.active) {
      return e
    }
  })
  return {eventArray: activeEvent}
}

const EventCardContainer = connect(
  mapStateToProps
)(EventCard)

export default EventCardContainer
