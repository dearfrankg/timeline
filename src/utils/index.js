import uuid from 'node-uuid'

export function getId () {
  return uuid.v4()
}

export function alphaSort (a, b) {
  return a.toUpperCase() > b.toUpperCase()
}
