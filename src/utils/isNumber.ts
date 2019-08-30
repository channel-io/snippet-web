// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isNumber(value: any): value is number {
  return typeof value === 'number'
}

export default isNumber
