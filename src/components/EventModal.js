import React, { Component } from 'react'
import {reduxForm} from 'redux-form'
import { DropModal as Modal } from 'boron'

class EventModal extends Component {
  showModal = () => {
    this.refs.modal.show()
  }

  hideModal = () => {
    this.refs.modal.hide()
  }

  componentWillUpdate () {
    console.log(55);
    console.log(this.props);
    const {modal} = this.props
    console.log(modal);
    modal ? this.showModal() : this.hideModal()
  }

  render () {
    const {
      fields: {eventYear, eventName, eventText, eventImageUrl},
      handleSubmit, validateForm
    } = this.props

    return (
      <Modal ref='modal'>
        <form onSubmit={handleSubmit(validateForm)}
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
})(EventModal)
