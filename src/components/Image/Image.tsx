/* External dependencies */
import React, { ReactElement } from 'react'

/* Internal dependencies */
import isString from 'Utils/isString'
import * as Styled from './Image.styled'

interface ImageProps {
  url?: any,
}

function Image({ url }: ImageProps): ReactElement | null {
  if (isString(url)) {
    return (
      <Styled.Image
        src={url}
      />
    )
  }

  return null
}

export default Image
