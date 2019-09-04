/* External dependencies */
import { createContext } from 'react'

interface SubmitContext {
  values: { [id: string]: string | number },
  updateInput: (id: string, value: string) => void,
  removeInput: (id: string) => void,
  submit: (componentId: string) => void,
  submitting: boolean,
}

export default createContext<SubmitContext>({
  values: {},
  updateInput: () => {},
  removeInput: () => {},
  submit: () => {},
  submitting: false,
})
