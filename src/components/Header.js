import React from 'react'
import Filter from 'components/Filter'
import AddEvent from 'containers/AddEvent'
import TimelineSelect from 'containers/TimelineSelect'

const Header = () => (
  <div className='header' >
    <TimelineSelect />
    <Filter />
    <AddEvent />
  </div>
)

export default Header
