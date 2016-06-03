import React, { PropTypes } from 'react'

const Event = ({ onClick, liked, eventName, eventYear }) => (
  <li style={{ color: Math.floor(eventYear / 100) % 2 === 0 ? 'black' : 'none' }}>
    {eventYear + ' '}
    {eventName + ' '}
    <i className='ion-heart'
      style={{ color: liked ? 'crimson' : 'grey' }}
      onClick={onClick} ></i>
  </li>
)

Event.propTypes = {
  onClick: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
  eventName: PropTypes.string.isRequired,
  eventYear: PropTypes.number.isRequired
}

export default Event
