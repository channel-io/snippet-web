/* Internal dependencies */
import { Dictionary, List, NumericDictionary } from '../types'

function Values<T extends object>(object?: T | null): Array<T[keyof T]>
function Values<T>(object?: Dictionary<T> | NumericDictionary<T> | List<T> | null): T[] {
  if (!object) { return [] }
  // @ts-ignore
  return Object.keys(object).map(k => object[k])
}

export default Values
