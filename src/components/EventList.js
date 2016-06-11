import React, { PropTypes, Component } from 'react'
import Event from './Event'
import * as keys from 'constants/keyTypes'

export default class EventList extends Component {

  componentWillMount () {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    const {onUpKey, onDownKey, timelineSelected} = this.props
    const keyCode = e.keyCode || e.which
    const fnMap = {
      [keys.UP]: onUpKey,
      [keys.DOWN]: onDownKey
    }
    if (keyCode in fnMap) {
      e.preventDefault()
      fnMap[keyCode](timelineSelected)
    }
  }

  render () {
    const {
      events, activeEvent,
      onEventClick, onEventDblClick, onHeartClick, onDeleteClick
    } = this.props

    return (
      <div className='list-container'>
        <div className='line-top'></div>
        <div className='line-bottom'></div>
        <div className='line'></div>
        <ul className='event-list'>
          {events.sort((a, b) => a.year - b.year).map(event => {
            return (
              <Event
                key={event.id}
                activeEvent={activeEvent}
                event={event}
                onEventClick={() => onEventClick(event)}
                onEventDblClick={() => onEventDblClick(event)}
                onHeartClick={() => onHeartClick(event.id)}
                onDeleteClick={() => onDeleteClick(event.id)}
                />
              )
          })}
        </ul>
      </div>
    )
  }
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    liked: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  activeEvent: PropTypes.object.isRequired,
  onUpKey: PropTypes.func.isRequired,
  onDownKey: PropTypes.func.isRequired,
  onEventClick: PropTypes.func.isRequired,
  onEventDblClick: PropTypes.func.isRequired,
  onHeartClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default EventList
