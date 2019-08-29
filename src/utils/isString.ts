// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isString(value: any): value is string {
  return typeof value === 'string'
}

export default isString
