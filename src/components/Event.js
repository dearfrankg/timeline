import React, { PropTypes } from 'react'

const Event = (props) => {
  const {
    eventYear, eventName, liked, active,
    onEventClick, onHeartClick, onDeleteClick
  } = props
  return (
    <li style={{ color: Math.floor(eventYear / 100) % 2 === 0 ? 'black' : 'none' }}
      onClick={onEventClick} className={active ? 'active' : ''}
      onDoubleClick={() => { console.log('dbl-click') }} >
      {eventYear + ' '}
      {eventName + ' '}
      <i className='ion-heart'
        style={{ color: liked ? '#d77' : '#666' }}
        onClick={onHeartClick} ></i>
      {' '}
      <i className='delete ion-close-circled'
        onClick={onDeleteClick} ></i>
    </li>
  )
}

Event.propTypes = {
  eventYear: PropTypes.number.isRequired,
  eventName: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  onEventClick: PropTypes.func.isRequired,
  onHeartClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default Event
