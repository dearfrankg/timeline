import React, { PropTypes } from 'react'

const Event = ({ liked, eventName, eventYear, onHeartClick, onEventClick, active }) => (
  <li style={{ color: Math.floor(eventYear / 100) % 2 === 0 ? 'black' : 'none' }}
    onClick={onEventClick} className={active ? 'active' : ''} >
    {eventYear + ' '}
    {eventName + ' '}
    <i className='ion-heart'
      style={{ color: liked ? 'crimson' : 'grey' }}
      onClick={onHeartClick} ></i>
  </li>
)

Event.propTypes = {
  liked: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  eventName: PropTypes.string.isRequired,
  eventYear: PropTypes.number.isRequired,
  onHeartClick: PropTypes.func.isRequired,
  onEventClick: PropTypes.func.isRequired
}

export default Event
