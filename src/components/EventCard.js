import React from 'react'

const EventCard = (props) => {
  const {activeEvent} = props
  if (typeof activeEvent === 'undefined') {
    return null
  }
  return (
    <div className='event-card'>
      <div className='event-image'>
        <img src={activeEvent.eventImageUrl} />
        <h3>{activeEvent.eventYear} - {activeEvent.eventName}</h3>
      </div>
      <span>{activeEvent.eventText}</span>
    </div>
  )
}

export default EventCard
