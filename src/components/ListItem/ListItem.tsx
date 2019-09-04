/* External dependencies */
import React, {
  useMemo,
  useCallback,
  useState,
  ReactElement,
} from 'react'

/* Internal dependencies */
import ComponentType from 'Constants/ComponentType'
import isString from 'Utils/isString'
import isObject from 'Utils/isObject'
import * as Styled from './ListItem.styled'

interface ListItemProps {
  id?: string,
  type?: string,
  title?: any,
  description?: string,
  url?: string,
  image?: string,
  collapse?: any[],
}

function ListItem({
  title,
  description,
  image,
  url,
  collapse,
}: ListItemProps): ReactElement | null {
  const [fold, setFold] = useState(true)
  const hasUrl = useMemo(() => isString(url) && url.length > 0, [url])
  const hasCollapse = useMemo(() => Array.isArray(collapse) && collapse.length > 0, [collapse])

  const handleOnClickTitle = useCallback((event: React.MouseEvent<HTMLParagraphElement>) => {
    if (!hasUrl) {
      return
    }

    event.stopPropagation()

    const w = window.parent || window
    w.open(url, '_blank', 'noopener noreferrer')
  }, [url, hasUrl])

  const handleOnClick = useCallback(() => {
    if (!hasCollapse) {
      return
    }

    setFold(!fold)
  }, [hasCollapse, fold])

  const Image = useMemo(() => {
    if (!isString(image) || !image) {
      return null
    }

    return (
      <Styled.Image src={image} />
    )
  }, [image])

  const Description = useMemo(() => {
    if (!isString(description) || !description) {
      return null
    }

    return (
      <Styled.Description>
        { description }
      </Styled.Description>
    )
  }, [description])

  const Collapse = useMemo(() => {
    if (fold || !hasCollapse) {
      return null
    }

    return (collapse as Array<ListItemProps>).map((item) => {
      if (!isObject(item)) return null
      if (!isString(item.id)) return null
      if (!isString(item.type) || item.type !== ComponentType.ListItem) return null

      return (
        <ListItem
          {...item}
          key={item.id}
          id={item.id}
        />
      )
    })
  }, [fold, collapse, hasCollapse])

  if (!isString(title) || !title) {
    return null
  }

  return (
    <>
      <Styled.Wrapper
        active={hasCollapse}
        onClick={handleOnClick}
      >
        { Image }
        <Styled.Content>
          <Styled.Title
            active={hasUrl}
            onClick={handleOnClickTitle}
          >
            { title }
          </Styled.Title>
          { Description }
        </Styled.Content>
      </Styled.Wrapper>
      { Collapse }
    </>
  )
}

export default ListItem
