import isNumber from './isNumber'
import leadingZero from './leadingZero'

function toDateString(value: number): string
function toDateString(date: Date): string
function toDateString(value: number | Date): string {
  const _date: Date = isNumber(value) ? new Date(value) : value
  return [
    _date.getFullYear(),
    leadingZero(_date.getMonth() + 1),
    leadingZero(_date.getDate()),
  ].join('-')
}

export default toDateString
