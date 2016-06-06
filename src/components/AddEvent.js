import React from 'react'
import EventModal from 'components/EventModal'

const AddEvent = (props) => {
  const {
    onAddEventClick, showModal, onModalClose, modalEvent
  } = props
  return (
    <div>
      <button onClick={onAddEventClick}
        className='pure-button pure-button-primary add-events-btn'>Add Events</button>
      <EventModal
        showModal={showModal}
        modalEvent={modalEvent}
        onModalClose={onModalClose} />
    </div>
  )
}

export default AddEvent
