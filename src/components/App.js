import React from 'react'
import Header from './Header'
import EventCardContainer from 'containers/EventCardContainer'
import AddEvent from 'containers/AddEvent'
import VisibleEventList from 'containers/VisibleEventList'

const App = () => (
  <div>
    <Header />
    <AddEvent />
    <VisibleEventList />
    <EventCardContainer />
  </div>
)

export default App
