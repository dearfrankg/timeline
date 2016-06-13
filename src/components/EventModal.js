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
    const {resetForm, activeEvent, worksheetName} = this.props
    return new Promise((resolve, reject) => {
      const valid =
        typeof values.name !== 'undefined' &&
        typeof values.desc !== 'undefined'
      if (valid) {
        if (activeEvent.id) {
          values.id = activeEvent.id
          dispatch(actions.updateEvent(values))
          dispatch(actions.setModalEvent({}))
          dispatch(actions.closeModal())
        } else {
          dispatch(actions.add(values, worksheetName))
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
      fields: {year, name, desc, url},
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
              <input type='text' placeholder='event year...' {...year} />
            </div>
            <div className='pure-control-group'>
              <label>Event Name</label>
              <input type='text' placeholder='event name...' {...name} />
            </div>
            <div className='pure-control-group'>
              <label>Description</label>
              <textarea placeholder='description...' {...desc} ></textarea>
            </div>
            <div className='pure-control-group'>
              <label>Image URL</label>
              <input type='text' placeholder='image-url...' {...url} />
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
  fields: ['year', 'name', 'desc', 'url']
},
(state) => {
  return {
    initialValues: state.sheets.activeEvent
  }
}
)(EventModal)
