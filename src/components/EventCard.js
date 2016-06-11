import React from 'react'

const EventCard = ({activeEvent}) => {
  if (typeof activeEvent.id === 'undefined') {
    return null
  }
  return (
    <div className='event-card'>
      <div className='event-image'>
        <img src={activeEvent.url} />
        <h3>{activeEvent.year} - {activeEvent.name}</h3>
      </div>
      <span>{activeEvent.desc}</span>
    </div>
  )
}

export default EventCard
