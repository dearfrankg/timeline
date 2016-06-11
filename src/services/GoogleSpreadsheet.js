import fetch from 'isomorphic-fetch'
import {alphaSort} from 'utils'

class GoogleSpreadsheet {
  constructor () {
    this.base = 'http://localhost:8080/api'
  }
  addRow = (event) => {
    return fetch(this.base + '/api/v1/events/physics', { method: 'POST', body: event })
      .catch((error) => {
        console.log('error: ', error)
      })
  }
  readRows = () => {
    return fetch(this.base + '/api/v1/events/physics', { method: 'GET' })
      .then((res) => res.json())
      .catch((error) => {
        console.log('error: ', error)
      })
  }
  updateRow = (event) => {
    return fetch(this.base + '/api/v1/events/physics/' + event.id, { method: 'PUT', body: event })
      .catch((error) => {
        console.log('error: ', error)
      })
  }
  deleteRow = (event) => {
    return fetch(this.base + '/api/v1/events/physics/' + event.id, { method: 'DELETE' })
      .catch((error) => {
        console.log('error: ', error)
      })
  }
  getSpreadsheet = () => {
    return fetch(this.base + '/api/v1/spreadsheets', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        return {
          sheets: {
            worksheets: data.worksheets,
            activeEvent: {}
          },
          UI: {
            timelineSelect: Object.keys(data.worksheets).sort(alphaSort)[0]
          }
        }
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  }
}

export default function createGoogleSpreadsheet () {
  let googleSpreadsheet
  googleSpreadsheet = googleSpreadsheet || new GoogleSpreadsheet()
  return googleSpreadsheet
}
