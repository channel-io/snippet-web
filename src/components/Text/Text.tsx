/* External dependencies */
import React, { ReactElement } from 'react'

/* Internal dependencies */
import isString from '../../utils/isString'
import isNumber from '../../utils/isNumber'
import * as Styled from './Text.styled'

interface TextProps {
  id?: string
  text?: any
  style?: string
  color?: string
  align?: string
}

function Text({
  text,
  style,
  color,
  align,
}: TextProps): ReactElement | null {
  if (!isString(text) && !isNumber(text)) {
    return null
  }

  return (
    <Styled.Text
      textStyle={style}
      textColor={color}
      align={align}
    >
      { text }
    </Styled.Text>
  )
}

export default Text
