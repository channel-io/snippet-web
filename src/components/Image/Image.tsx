/* External dependencies */
import React, { ReactElement } from 'react'

/* Internal dependencies */
import isString from 'Utils/isString'
import * as Styled from './Image.styled'

interface ImageProps {
  id?: string,
  url?: any,
}

function Image({ url }: ImageProps): ReactElement | null {
  if (!isString(url)) {
    return null
  }

  return (
    <Styled.Image
      src={url}
    />
  )
}

export default Image
