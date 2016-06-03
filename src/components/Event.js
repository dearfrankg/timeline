import React, { PropTypes } from 'react'

const Event = ({ onClick, liked, name, year }) => (
  <li>
    {year + ' '}
    {name + ' '}
    <i className='ion-heart'
      style={{ color: liked ? 'crimson' : 'grey' }}
      onClick={onClick} ></i>
  </li>
)

Event.propTypes = {
  onClick: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
}

export default Event
