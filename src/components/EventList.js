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
    const {onUpKey, onDownKey} = this.props
    const keyCode = e.keyCode || e.which
    const fnMap = {
      [keys.UP]: onUpKey,
      [keys.DOWN]: onDownKey
    }
    if (keyCode in fnMap) {
      e.preventDefault()
      fnMap[keyCode]()
    }
  }

  render () {
    const {
      events, onEventClick, onHeartClick, onDeleteClick,
      onEventDblClick
    } = this.props
    return (
      <div className='list-container'>
        <div className='line-top'></div>
        <div className='line-bottom'></div>
        <div className='line'></div>
        <ul className='event-list'>
          {events.sort((a, b) => a.eventYear - b.eventYear).map(event =>
            <Event
              key={event.id}
              event={event}
              onEventClick={() => onEventClick(event.id)}
              onHeartClick={() => onHeartClick(event.id)}
              onDeleteClick={() => onDeleteClick(event.id)}
              onEventDblClick={() => onEventDblClick(event)}
              />
          )}
        </ul>
      </div>
    )
  }
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
    eventName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onEventClick: PropTypes.func.isRequired,
  onUpKey: PropTypes.func.isRequired,
  onDownKey: PropTypes.func.isRequired,
  onHeartClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default EventList
