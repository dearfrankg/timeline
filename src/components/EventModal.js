import React, { Component } from 'react'
import {reduxForm} from 'redux-form'
import { DropModal as Modal } from 'boron'
import * as actions from 'actions'

class EventModal extends Component {
  showModal = () => {
    this.refs.modal.show()
  }

  hideModal = () => {
    this.refs.modal.hide()
  }

  componentDidUpdate () {
    const {showModal} = this.props
    showModal ? this.showModal() : this.hideModal()
  }

  validateForm = (values, dispatch) => {
    const {resetForm, modalEvent} = this.props
    return new Promise((resolve, reject) => {
      values.eventYear = parseInt(values.eventYear, 10) || 0
      const valid =
        typeof values.eventName !== 'undefined' &&
        typeof values.eventText !== 'undefined'
      if (valid) {
        if (modalEvent.id) {
          values.id = modalEvent.id
          dispatch(actions.updateEvent(values))
          dispatch(actions.setModalEvent({}))
          dispatch(actions.closeModal())
        } else {
          dispatch(actions.addEvent(values))
          resetForm()
        }
        resolve()
      } else {
        reject()
      }
    })
  }

  render () {
    const {
      fields: {eventYear, eventName, eventText, eventImageUrl},
      handleSubmit, onModalClose
    } = this.props

    return (
      <Modal ref='modal' onHide={onModalClose} >
        <form onSubmit={handleSubmit(this.validateForm)}
          className='add-event-form pure-form pure-form-aligned'>
          <fieldset>
            <legend>Add Event</legend>

            <div className='pure-control-group'>
              <label>Event Year</label>
              <input type='text' placeholder='event year...' {...eventYear} />
            </div>
            <div className='pure-control-group'>
              <label>Event Name</label>
              <input type='text' placeholder='event name...' {...eventName} />
            </div>
            <div className='pure-control-group'>
              <label>Description</label>
              <textarea placeholder='description...' {...eventText} ></textarea>
            </div>
            <div className='pure-control-group'>
              <label>Image URL</label>
              <input type='text' placeholder='image-url...' {...eventImageUrl} />
            </div>
            <div className='pure-control-group'>
              <label></label>
              <button type='submit' className='pure-button pure-button-primary'>Submit</button>
            </div>
          </fieldset>
        </form>
      </Modal>
    )
  }
}

export default reduxForm({
  form: 'eventForm',
  fields: ['eventYear', 'eventName', 'eventText', 'eventImageUrl']
},
(state) => ({
  initialValues: state.UI.modal.modalEvent
})
)(EventModal)
