import React, { PropTypes } from 'react'

const Event = (props) => {
  const {
    event, onEventClick, onHeartClick, onDeleteClick,
    onEventDblClick, activeEvent
  } = props
  const active = (typeof activeEvent.id !== 'undefined') &&
                 (event.id === activeEvent.id)
  const liClasses = active ? 'active' : ''
  const centuryColor = Math.floor(event.year / 100) % 2 === 0 ? 'black' : 'none'
  const heartColor = event.liked === 'TRUE' ? '#d77' : '#666'

  return (
    <li style={{ color: centuryColor }}
      className={liClasses}
      onClick={onEventClick}
      onDoubleClick={onEventDblClick} >
      {`${event.year} ${event.name} `}
      <i className='ion-heart' style={{ color: heartColor }} onClick={onHeartClick} ></i>
      {' '}
      <i className='delete ion-close-circled' onClick={onDeleteClick} ></i>
    </li>
  )
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  activeEvent: PropTypes.object.isRequired,
  onEventClick: PropTypes.func.isRequired,
  onEventDblClick: PropTypes.func.isRequired,
  onHeartClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default Event
