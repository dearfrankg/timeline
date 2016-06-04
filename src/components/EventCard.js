import React from 'react'

const EventCard = (props) => {
  const {eventArray} = props
  const [activeEvent] = eventArray
  if (activeEvent.length === 0) {
    return null
  }
  const imageUrl = '/images/einstein-folded-hands.jpg'
  const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

  return (
    <div className='event-card'>
      <div className='event-image'>
        <img src={imageUrl} />
        <h3>{activeEvent.eventName}</h3>
      </div>
      <span>{activeEvent.eventText}</span>
    </div>
  )
}

export default EventCard
