import uuid from 'node-uuid'

export function getId () {
  return uuid.v4()
}

export function alphaSort (a, b) {
  return a.toUpperCase() > b.toUpperCase()
}

export function sortByYear (a, b) {
  const aYear = a.year + a.id
  const bYear = b.year + b.id
  return aYear.localeCompare(bYear)
}
