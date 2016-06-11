import 'styles/app.pcss'
import React from 'react'
import { render } from 'react-dom'
import configureStore from 'store/configureStore'
import Root from 'containers/Root'
import localStorageUtil from 'utils/localStorageUtils'
import createGoogleSpreadsheet from 'services/GoogleSpreadsheet'

const APP_OFFLINE = false
const GoogleSpreadsheet = createGoogleSpreadsheet()
Promise.resolve()
  .then(() => {
    return (APP_OFFLINE)
      ? localStorageUtil.getState()
      : GoogleSpreadsheet.getSpreadsheet()
  })
  .then((initialState) => {
    const store = configureStore(initialState)
    store.subscribe(() => {
      localStorageUtil.setState(store)
    })
    const app = document.getElementById('root')
    render(<Root store={store} />, app)
  })
