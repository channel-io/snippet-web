/* External dependencies */
import React, { ReactElement } from 'react'

/* Internal dependencies */
import * as Styled from './Spacer.styled'

interface SpacerProps {
  id?: string,
  size?: string,
}

function Spacer({ size }: SpacerProps): ReactElement {
  return (
    <Styled.Spacer size={size} />
  )
}

export default Spacer
