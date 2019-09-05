/* External dependencies */
import { createContext, RefObject } from 'react'

export default createContext<RefObject<HTMLElement> | null>(null)
