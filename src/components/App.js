import React from 'react'
import Header from './Header'
import EventCard from 'containers/EventCard'
import VisibleEventList from 'containers/VisibleEventList'

const App = () => (
  <div className='app-container'>
    <Header />
    <div className='content-container' >
      <VisibleEventList />
      <EventCard />
    </div>
  </div>
)

export default App

// <EventCard />
