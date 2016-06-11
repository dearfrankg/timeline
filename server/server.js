import express from 'express'
import bodyParser from 'body-parser'
import createGoogleSpreadsheet from './lib/GoogleSpreadsheet'

const sheetId = '1McniDRimAOf4fT40pbYgGMP_8pK8JSFL40EnA2Sj6G0'
const ssFields = ['year', 'name', 'desc', 'url', 'liked']
const gs = createGoogleSpreadsheet(sheetId, ssFields)

const port = process.env.PORT || 8100
const jsonParser = bodyParser.json()
const app = express()
const router = express.Router()

router.post('/events/:sheet', jsonParser, function (req, res, next) {
  if (!req.body) return res.sendStatus(400)
  gs.createRow(req.params.sheet, req.body)
    .then(() => res.sendStatus(200))
    .catch(next)
})

router.get('/events/:sheet', function (req, res, next) {
  gs.readRows(req.params.sheet)
    .then(res.json.bind(res))
    .catch(next)
})

router.put('/events/:sheet/:id', jsonParser, function (req, res, next) {
  gs.updateRow(req.params.sheet, req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(next)
})

router.delete('/events/:sheet/:id', function (req, res, next) {
  gs.deleteRow(req.params.sheet, req.params.id)
    .then(() => res.sendStatus(200))
    .catch(next)
})

router.get('/spreadsheets', function (req, res, next) {
  gs.getSpreadsheet()
    .then(res.json.bind(res))
    .catch(next)
})

app.use('/api/v1', router)

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
