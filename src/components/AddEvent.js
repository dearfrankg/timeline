import React from 'react'
import EventModal from 'components/EventModal'

// validateForm = (values, dispatch) => {
//   const {resetForm} = this.props
//   return new Promise((resolve, reject) => {
//     values.eventYear = parseInt(values.eventYear, 10) || 0
//     const valid =
//       typeof values.eventName !== 'undefined' &&
//       typeof values.eventText !== 'undefined'
//     if (valid) {
//       dispatch(addEvent(values))
//       resetForm()
//       resolve()
//     } else {
//       reject()
//     }
//   })
// }

const AddEvent = (props) => {
  const {onAddEventClick, modal} = props
  return (
    <div>
      <button onClick={onAddEventClick}
        className='pure-button pure-button-primary add-events-btn'>Add Events</button>
      <EventModal modal={modal} validateForm={() => { return Promise.resolve() }} />
    </div>
  )
}
export default AddEvent
