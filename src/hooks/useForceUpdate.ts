/* External dependencies */
import { useReducer } from 'react'

export default function useForceUpdate() {
  const [, forceUpdate] = useReducer((x) => (!x), true)
  return forceUpdate
}
