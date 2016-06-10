import 'styles/app.pcss'
import React from 'react'
import { render } from 'react-dom'
import configureStore from 'store/configureStore'
import Root from 'containers/Root'
import localStorageUtil from 'utils/localStorageUtils'

const store = configureStore(localStorageUtil.getState())
store.subscribe(() => {
  localStorageUtil.setState(store)
})

const app = document.getElementById('root')
render(<Root store={store} />, app)
