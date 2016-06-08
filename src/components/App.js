import React from 'react'
import Header from './Header'
import EventCard from 'containers/EventCard'
import AddEvent from 'containers/AddEvent'
import VisibleEventList from 'containers/VisibleEventList'

const App = () => (
  <div className='app-container'>
    <Header />
    <AddEvent />
    <div className='content-container' >
      <VisibleEventList />
      <EventCard />
    </div>
  </div>
)

export default App
