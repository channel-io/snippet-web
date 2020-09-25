export type List<T> = ArrayLike<T>

export interface Dictionary<T> {
  [index: string]: T
}

export interface NumericDictionary<T> {
  [index: number]: T
}
