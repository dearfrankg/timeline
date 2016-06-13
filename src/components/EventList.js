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

  componentDidUpdate () {
    const {activeEvent, events} = this.props
    const activeEventIndex = events.reduce((acc, curr, i) => {
      return (curr.id === activeEvent.id) ? i : acc
    }, -1)
    const scrollUnits = (activeEventIndex < 6) ? 0 : activeEventIndex - 6
    window.scroll(window.scrollX, scrollUnits * 29)
  }

  handleKeyDown = (e) => {
    const {
      onUpKey, onDownKey, timelineSelected, activeEvent
    } = this.props
    const keyCode = e.keyCode || e.which
    const fnMap = {
      [keys.UP]: onUpKey,
      [keys.DOWN]: onDownKey
    }
    if (keyCode in fnMap) {
      e.preventDefault()
      fnMap[keyCode](timelineSelected, activeEvent)
    }
  }

  render () {
    const {
      events, activeEvent, timelineSelected,
      onEventClick, onEventDblClick, onHeartClick, onDeleteClick
    } = this.props

    return (
      <div className='list-container'>
        <div className='line-top'></div>
        <div className='line-bottom'></div>
        <div className='line'></div>
        <ul className='event-list'>
          {events.map(event => {
            return (
              <Event
                key={event.id}
                activeEvent={activeEvent}
                event={event}
                onEventClick={() => onEventClick(event)}
                onEventDblClick={() => onEventDblClick(event)}
                onHeartClick={() => onHeartClick(event.id)}
                onDeleteClick={() => onDeleteClick(event, timelineSelected)}
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
