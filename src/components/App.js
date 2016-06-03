import React from 'react'
import Header from './Header'
import AddEvent from 'containers/AddEvent'
import VisibleEventList from 'containers/VisibleEventList'

const App = () => (
  <div>
    <Header />
    <AddEvent />
    <VisibleEventList />
  </div>
)

export default App
