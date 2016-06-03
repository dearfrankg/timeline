import React, { PropTypes } from 'react'
import Event from './Event'

const EventList = ({ events, onEventClick }) => (
  <div className='list-container'>
    <div className='line-top'></div>
    <div className='line-bottom'></div>
    <div className='line'></div>
    <ul className='event-list'>
      {events.sort((a, b) => a.eventYear - b.eventYear).map(event =>
        <Event
          key={event.id}
          {...event}
          onClick={() => onEventClick(event.id)}
        />
      )}
    </ul>
  </div>
)

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    liked: PropTypes.bool.isRequired,
    eventName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onEventClick: PropTypes.func.isRequired
}

export default EventList
