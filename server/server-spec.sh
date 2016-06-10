#!/usr/bin/env bash

echo 'CREATE'
echo 'POST: http://127.0.0.1:8100/api/v1/events/physics'
curl -X POST -d '{"year":"1942", "name": "foo", "desc": "foo", "url": "http" }' \
  -H "Content-Type: application/json" \
  http://127.0.0.1:8100/api/v1/events/physics
echo
echo
echo

echo 'READ'
echo 'GET: http://127.0.0.1:8100/api/v1/events/physics'
curl -X GET http://127.0.0.1:8100/api/v1/events/physics
echo
echo
echo

echo 'UPDATE'
echo 'PUT: http://127.0.0.1:8100/api/v1/events/physics/2'
curl -X PUT -d '{"year":"1943", "name": "boo", "desc": "boo", "url": "https" }' \
  -H "Content-Type: application/json" \
  http://127.0.0.1:8100/api/v1/events/physics/2
echo
echo
echo

echo 'DELETE'
echo 'DELETE: http://127.0.0.1:8100/api/v1/events/physics/2'
curl -X DELETE http://127.0.0.1:8100/api/v1/events/physics/2
echo
echo
echo

echo 'READ spreadsheet'
echo 'GET: http://127.0.0.1:8100/api/v1/spreadsheets'
curl -X GET http://127.0.0.1:8100/api/v1/spreadsheets
echo
echo
echo
