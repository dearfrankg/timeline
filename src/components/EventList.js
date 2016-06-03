import React, { PropTypes } from 'react'
import Event from './Event'

const EventList = ({ events, onEventClick, onHeartClick }) => (
  <div className='list-container'>
    <div className='line-top'></div>
    <div className='line-bottom'></div>
    <div className='line'></div>
    <ul className='event-list'>
      {events.sort((a, b) => a.eventYear - b.eventYear).map(event =>
        <Event
          key={event.id}
          {...event}
          onHeartClick={() => onHeartClick(event.id)}
          onEventClick={() => onEventClick(event.id)}
        />
      )}
    </ul>
  </div>
)

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    liked: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
    eventName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onHeartClick: PropTypes.func.isRequired,
  onEventClick: PropTypes.func.isRequired
}

export default EventList
