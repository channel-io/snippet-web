/* External dependencies */
import React from 'react'

/* Internal dependencies */
import isNumber from 'Utils/isNumber'
import isString from 'Utils/isString'
import * as Styled from './KeyValue.styled'

interface KeyValueProps {
  id?: string,
  items?: any,
}

function KeyValue({ items }: KeyValueProps) {
  if (!Array.isArray(items)) {
    return null
  }

  if (!items.length) {
    return null
  }

  const content = items.map(({ key, value }) => {
    const title = (isString(key) || isNumber(key)) ? key : ''
    const description = (isString(value) || isNumber(value)) ? value : ''
    return (
      <Styled.Item key={title}>
        <Styled.Key>{ title }</Styled.Key>
        <Styled.Value>{ description }</Styled.Value>
      </Styled.Item>
    )
  })

  return (
    <Styled.Wrapper>
      { content }
    </Styled.Wrapper>
  )
}

export default KeyValue
