import React from 'react'
import {reduxForm} from 'redux-form'
import {addEvent} from 'actions'

const submit = (values, dispatch) => {
  dispatch(addEvent(values))
  return Promise.resolve()
}

let AddEvent = (props) => {
  const {fields: {year, name, text, imageUrl}, handleSubmit} = props

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label>Year</label>
        <input type='text' placeholder='year...' {...year} />
      </div>
      <div>
        <label>Event name</label>
        <input type='text' placeholder='event name...' {...name} />
      </div>
      <div>
        <label>Description</label>
        <input type='text' placeholder='description...' {...text} />
      </div>
      <div>
        <label>Image URL</label>
        <input type='text' placeholder='image-url...' {...imageUrl} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

AddEvent = reduxForm({
  form: 'addEvent',
  fields: ['year', 'name', 'text', 'imageUrl']
})(AddEvent)

export default AddEvent
