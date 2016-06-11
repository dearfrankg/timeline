import { connect } from 'react-redux'
import EventCard from 'components/EventCard'

const mapStateToProps = (state) => {
  const activeEvent = state.sheets.activeEvent || {}
  return {
    activeEvent
  }
}

export default connect(
  mapStateToProps
)(EventCard)
