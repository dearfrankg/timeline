const isAvailable = (function isAvailableIffe () {
  const test = 'test'
  try {
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch (e) {
    return false
  }
}())

const localStorageUtil = {
  get (key) {
    if (isAvailable) {
      return localStorage.getItem(key)
    }
    return null
  },

  set (key, value) {
    if (isAvailable) {
      return localStorage.setItem(key, value)
    }
    return null
  },

  getState () {
    const events = JSON.parse(this.get('timeline')) || []
    return {events}
  },

  setState (store) {
    localStorageUtil.set(
      'timeline',
      JSON.stringify(store.getState().events)
    )
  }

}

export default localStorageUtil
