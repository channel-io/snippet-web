// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isObject(value: any): value is object {
  return typeof value === 'object' && value !== null
}

export default isObject
