/* External dependencies */
import React, { useRef, PropsWithChildren } from 'react'

/* Internal dependencies */
import ContainerRefContext from '../../contexts/ContainerRefContext'
import * as Styled from './ContainerRefProvider.styled'

interface ContainerRefProviderProps {
  className?: string
}

function ContainerRefProvider({ className, children }: PropsWithChildren<ContainerRefProviderProps>) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  return (
    <Styled.Wrapper className={className} ref={wrapperRef}>
      <ContainerRefContext.Provider value={wrapperRef}>
        { children }
      </ContainerRefContext.Provider>
    </Styled.Wrapper>
  )
}

export default ContainerRefProvider
