import React, { PropTypes } from 'react'

const Event = (props) => {
  const {
    event, onEventClick, onHeartClick, onDeleteClick, onEventDblClick
    } = props
  return (
    <li style={{ color: Math.floor(event.eventYear / 100) % 2 === 0 ? 'black' : 'none' }}
      onClick={onEventClick} className={event.active ? 'active' : ''}
      onDoubleClick={onEventDblClick}>
      {event.eventYear + ' '}
      {event.eventName + ' '}
      <i className='ion-heart'
        style={{ color: event.liked ? '#d77' : '#666' }}
        onClick={onHeartClick} ></i>
      {' '}
      <i className='delete ion-close-circled'
        onClick={onDeleteClick} ></i>
    </li>
  )
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  onEventClick: PropTypes.func.isRequired,
  onHeartClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default Event
