import React from 'react'
import {reduxForm} from 'redux-form'
import {addEvent} from 'actions'

const submit = (values, dispatch) => {
  dispatch(addEvent(values))
  return Promise.resolve()
}

let AddEvent = (props) => {
  const {fields: {eventYear, eventName, eventText, eventImageUrl}, handleSubmit} = props

  return (
    <form onSubmit={handleSubmit(submit)} className='pure-form pure-form-aligned'>
      <fieldset>
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
          <input type='text' placeholder='description...' {...eventText} />
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
  )
}

AddEvent = reduxForm({
  form: 'addEvent',
  fields: ['eventYear', 'eventName', 'eventText', 'eventImageUrl']
})(AddEvent)

export default AddEvent
