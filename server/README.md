
# google spreadsheet rest server


## REST SERVER

    create: POST    localhost:8080/api/v1/events
    read:   GET     localhost:8080/api/v1/events/:sheet
    update: PUT     localhost:8080/api/v1/events/:sheet/:id
    delete: DELETE  localhost:8080/api/v1/events/:sheet/:id

    read:   GET     localhost:8080/api/v1/spreadsheet



### CREATE

Post an object to create a new row. The object property names should match the spreadsheet header names, and the values will be values entered into a row.

    {
      name: 'joe',
      address: '17 Chiffon Drive'
    }

### READ

Reading rows will return an array of row objects in json format

    localhost:8080/api/v1/rows/:sheet


Reading spreadsheet will return a spreadsheet object in json format

    localhost:8080/api/v1/spreadsheet

The spreadsheet structure:

    {
      title: 'ScienceTimelines',
      worksheets: {
        physics: [
          { id: 0, year: x, name: x, desc: x, url: x }
          ...
        ]
      }
    }


### UPDATE

Updating a row will return a success code of 200

    localhost:8080/api/v1/rows/:sheet/:id


### DELETE

Deleting a row will return a success code of 200

    localhost:8080/api/v1/rows/:sheet/:id
