// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean'
}

export default isBoolean
