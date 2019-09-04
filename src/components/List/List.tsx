/* External dependencies */
import React, { ReactElement } from 'react'

/* Internal dependencies */
import ListItem from 'Components/ListItem'
import isObject from 'Utils/isObject'
import isString from 'Utils/isString'
import * as Styled from './List.styled'

interface ListProps {
  id?: string,
  items?: { id: string }[],
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
