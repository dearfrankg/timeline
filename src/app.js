import 'styles/app.pcss'
import React from 'react'
import { render } from 'react-dom'
import configureStore from 'store/configureStore'
import Root from 'containers/Root'

const app = document.getElementById('root')
const store = configureStore()

render(<Root store={store} />, app)
