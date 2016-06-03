import React, { PropTypes } from 'react'
import Event from './Event'

const EventList = ({ events, onEventClick }) => (
  <ul>
    {events.sort((a, b) => a.year - b.year).map(event =>
      <Event
        key={event.id}
        {...event}
        onClick={() => onEventClick(event.id)}
      />
    )}
  </ul>
)

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    liked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onEventClick: PropTypes.func.isRequired
}

export default EventList
