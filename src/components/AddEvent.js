import React from 'react'
import EventModal from 'components/EventModal'

const AddEvent = (props) => {
  const {onAddEventClick, modal, setModalToFalse} = props
  return (
    <div>
      <button onClick={onAddEventClick}
        className='pure-button pure-button-primary add-events-btn'>Add Events</button>
      <EventModal
        modal={modal}
        setModalToFalse={setModalToFalse} />
    </div>
  )
}

export default AddEvent
