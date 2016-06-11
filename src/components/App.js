import React from 'react'
import Header from './Header'
import EventCard from 'containers/EventCard'
import AddEvent from 'containers/AddEvent'
import VisibleEventList from 'containers/VisibleEventList'
import TimelineSelect from 'containers/TimelineSelect'

const App = () => (
  <div className='app-container'>
    <Header />
    <TimelineSelect />
    <AddEvent />
    <div className='content-container' >
      <VisibleEventList />
    </div>
  </div>
)

export default App

// <EventCard />
