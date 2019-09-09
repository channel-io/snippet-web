/* External dependencies */
import { useContext, useEffect } from 'react'

/* Internal dependencies */
import ContainerRefContext from '../contexts/ContainerRefContext'
import useForceUpdate from './useForceUpdate'

function useContainer() {
  const containerRef = useContext(ContainerRefContext)
  const forceUpdate = useForceUpdate()

  const container = containerRef ? containerRef.current : null

  useEffect(() => {
    if (!container) {
      forceUpdate(undefined)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return container
}

export default useContainer
