function isNil(value?: any): value is null | undefined {
  return value === null
    || value === undefined
    || typeof value === 'undefined'
}

export default isNil
