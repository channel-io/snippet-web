/* External dependencies */
import React, { ReactElement } from 'react'

/* Internal dependencies */
import isObject from '../../utils/isObject'
import isString from '../../utils/isString'
import ListItem from '../ListItem'
import * as Styled from './List.styled'

interface ListProps {
  id?: string
  items?: { id: string }[]
}

function List({ items }: ListProps): ReactElement | null {
  if (!Array.isArray(items)) {
    return null
  }

  return (
    <Styled.Wrapper>
      { items.map((item) => {
        if (!isObject(item)) {
          return null
        }

        if (!isString(item.id)) {
          return null
        }

        return (
          <ListItem
            {...item}
            key={item.id}
          />
        )
      }) }
    </Styled.Wrapper>
  )
}

export default List
