import React from 'react'
import Header from './Header'
import EventCard from './EventCard'
import AddEvent from 'containers/AddEvent'
import VisibleEventList from 'containers/VisibleEventList'

const App = () => (
  <div>
    <Header />
    <AddEvent />
    <VisibleEventList />
    <EventCard />
  </div>
)

export default App
