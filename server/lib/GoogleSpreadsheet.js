import creds from '../timelines-37f65eca9874.json'
import GoogleSheetsNodeApi from 'google-sheets-node-api'

class GoogleSpreadsheet {
  constructor (sheetId, fields) {
    this.sheetId = sheetId
    this.sheet = new GoogleSheetsNodeApi(sheetId)
    this.ssFields = fields
    this.getSpreadsheetData()
      .then((data) => {
        this.cache = {}
        data.worksheets.forEach((ws) => {
          this.cache[ws.title] = {}
          this.cache[ws.title].getRows = ws.getRows
          this.cache[ws.title].addRow = ws.addRow
        })
        // console.log(this.cache)
      })
  }

  // promise <- getSpreadsheet()
  getSpreadsheet = () => {
    return this.getSpreadsheetData()
      .then(this.getWorksheets)
  }

  // promise <- createRow(string, object)
  createRow = (worksheetName, rowObject) => {
    return this.cache[worksheetName].addRow(rowObject)
  }

  // array[objects] <- readRows(string)
  readRows = (worksheetName) => {
    return this.cache[worksheetName].getRows()
      .then(rows => {
        let row
        let rowId = 0
        let rowCollection = []
        while (row = rows[rowId]) { // eslint-disable-line
          const rowObject = {id: rowId}
          this.ssFields.forEach((f) => {
            rowObject[f] = row[f]
          })
          rowCollection.push({...rowObject})
          rowId++
        }
        return rowCollection
      })
  }

  // promise <- updateRow(string, number, object)
  updateRow = (worksheetName, rowId, rowObject) => {
    return this.cache[worksheetName].getRows()
      .then(rows => {
        this.ssFields.forEach((f) => {
          rows[rowId][f] = rowObject[f]
        })
        return rows[rowId].save()
      })
  }

  // promise <- deleteRow(string, number)
  deleteRow = (worksheetName, rowId) => {
    return this.cache[worksheetName].getRows()
      .then(rows => rows[rowId].delete())
  }

  getSpreadsheetData = () => {
    const sheet = this.sheet
    return sheet.useServiceAccountAuth(creds)
      .then(sheet.getSpreadsheet.bind(sheet))
      // .then(console.log.bind(console))
  }

  getWorksheets = (data) => {
    const ssData = {worksheets: {}}
    ssData.title = data.title
    const promises = data.worksheets.map(ws => {
      ssData.worksheets[ws.title] = []
      return ws.getRows()
        .then(rows => {
          let row
          let rowId = 0
          while (row = rows[rowId]) { // eslint-disable-line
            const event = {id: rowId++}
            this.ssFields.forEach((f) => {
              event[f] = row[f]
            })
            ssData.worksheets[ws.title].push({...event})
          }
        })
    })
    return Promise.all(promises)
      .then(() => ssData)
  }
}

export default function createGoogleSpreadsheet (sheetId, fields) {
  let googleSpreadsheet
  googleSpreadsheet = googleSpreadsheet || new GoogleSpreadsheet(sheetId, fields)
  return googleSpreadsheet
}

function log (data) {
  console.log(JSON.stringify(data, null, 2))
}
