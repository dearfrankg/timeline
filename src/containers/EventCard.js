import { connect } from 'react-redux'
import EventCard from 'components/EventCard'

const mapStateToProps = (state) => {
  const [activeEvent] = state.events.filter((e) => e.active)
  return {
    activeEvent
  }
}

export default connect(
  mapStateToProps
)(EventCard)
