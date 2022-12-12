import cloneDeep from 'lodash.clonedeep'

function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      },
    }
  })
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj)
}

function capitalize(str) {
  if (!str) return
  return str[0].toUpperCase() + str.slice(1)
}

export { cloneDeep, isObject, capitalize, useDebouncedRef }
