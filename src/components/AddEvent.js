import React from 'react'
import EventModal from 'components/EventModal'

const AddEvent = (props) => {
  const {
    onAddEventClick, showModal, onModalClose, activeEvent, worksheetName
  } = props
  return (
    <div>
      <button onClick={onAddEventClick}
        className='pure-button pure-button-primary add-events-btn'>Add Events</button>
      <EventModal
        showModal={showModal}
        activeEvent={activeEvent}
        worksheetName={worksheetName}
        onModalClose={onModalClose} />
    </div>
  )
}

export default AddEvent
