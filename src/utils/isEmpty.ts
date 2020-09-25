import isNil from './isNil'
import isObject from './isObject'
import isString from './isString'

function isEmpty(value?: any): boolean {
  if (isNil(value)) { return true }
  if (Array.isArray(value) || isString(value)) {
    return value.length === 0
  }
  if (isObject(value)) {
    return Object.keys(value).length === 0
  }
  return false
}

export default isEmpty
