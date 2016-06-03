import 'styles/app.pcss'
import React from 'react'
import { render } from 'react-dom'
import configureStore from 'store/configureStore'
import Root from 'containers/Root'
import initialState from './initialState.json'

const app = document.getElementById('root')
const store = configureStore({events: initialState})

render(<Root store={store} />, app)
