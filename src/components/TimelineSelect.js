import React from 'react'

const TimelineSelect = (props) => (
  <div class='pure-u-1 pure-u-md-1-3'>
    <label for='timelines'>Timelines</label>
    <select id='timelines' class='pure-input-1-2' onChange={props.onSelect}>
      {props.items.map((item, i) => {
        return <option key={i}>{item}</option>
      })}
    </select>
  </div>
)

export default TimelineSelect
