import createGoogleSpreadsheet from './lib/GoogleSpreadsheet'

const sheetId = '1McniDRimAOf4fT40pbYgGMP_8pK8JSFL40EnA2Sj6G0'
const ssFields = ['year', 'name', 'desc', 'url']
const gs = createGoogleSpreadsheet(sheetId, ssFields)

function demo () {
  const worksheetName = 'physics'
  const newEvent = {
    year: 1872,
    name: 'year of the Frank',
    desc: 'much pain and suffering',
    url: 'http://www.yahoo.com'
  }
  console.log('Demo Starting')

  // get spreadsheet with all worksheets
  gs.getSpreadsheet()
    .then((data) => {
      header('getSpreadsheet()')
      log(data)
    })
    // createRow
    .then(() => {
      return gs.createRow(worksheetName, newEvent)
        .then(() => gs.readRows(worksheetName))
        .then((data) => {
          header('createRow(worksheetName, rowObject)')
          log(data)
        })
    })
    // readRows
    .then(() => {
      return gs.readRows(worksheetName)
        .then((data) => {
          header('readRows(worksheetName)')
          log(data)
        })
    })
    // updateRow
    .then(() => {
      newEvent.desc = 'much joy and jubilation'
      return gs.updateRow(worksheetName, 2, newEvent)
        .then(() => gs.readRows(worksheetName))
        .then((data) => {
          header('updateRow(worksheetName, 2, rowObject)')
          log(data)
        })
    })
    // deleteRow
    .then(() => {
      return gs.deleteRow(worksheetName, 2)
        .then(() => gs.readRows(worksheetName))
        .then((data) => {
          header('deleteRow(worksheetName, 2)')
          log(data)
        })
    })
    .then(() => log('finished'))
    .catch(log)
}

demo()

function header (title) {
  console.log(`
${title}
-------------------------------------------`)
}

function log (data) {
  console.log(JSON.stringify(data, null, 2))
}
