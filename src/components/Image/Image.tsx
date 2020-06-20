/* External dependencies */
import React, { ReactElement } from 'react'

/* Internal dependencies */
import isString from '../../utils/isString'
import * as Styled from './Image.styled'

interface ImageProps {
  id?: string
  url?: any
}

function Image({ url }: ImageProps): ReactElement | null {
  if (!isString(url)) {
    return null
  }

  return (
    <Styled.Wrapper>
      <Styled.Image
        src={url}
      />
    </Styled.Wrapper>
  )
}

export default Image
