/* External dependencies */
import React, {
  useMemo,
  useCallback,
  useContext,
  ReactElement,
} from 'react'

/* Internal dependencies */
import ActionType from '../../constants/ActionType'
import FormContext from '../../contexts/FormContext'
import isString from '../../utils/isString'
import isObject from '../../utils/isObject'
import * as Styled from './ListItem.styled'

interface ListItemProps {
  id?: string,
  type?: string,
  title?: any,
  description?: string,
  image?: string,
  action?: {
    type?: string,
    url?: string,
  },
}

function ListItem({
  id,
  title,
  description,
  image,
  action,
}: ListItemProps): ReactElement | null {
  const { submit, submitting } = useContext(FormContext)

  const hasUrl = useMemo(() => {
    if (!isObject(action)) return false
    if (!isString(action.type) || action.type !== ActionType.URL) return false
    if (!isString(action.url) || !action.url) return false
    return true
  }, [action])

  const hasSubmit = useMemo(() => {
    if (!isObject(action)) return false
    if (!isString(action.type) || action.type !== ActionType.Submit) return false
    return true
  }, [action])

  const handleOnClick = useCallback(() => {
    if (hasUrl) {
      const w = window.parent || window
      w.open(action!.url, '_blank', 'noopener noreferrer')
      return
    }

    if (hasSubmit && !submitting) {
      submit(id as string)
    }
  }, [hasUrl, hasSubmit, id, action, submit, submitting])

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

  if (!isString(title) || !title || !isString(id) || !id) {
    return null
  }

  return (
    <Styled.Wrapper
      active={hasUrl || hasSubmit}
      onClick={handleOnClick}
      disabled={submitting}
    >
      { Image }
      <Styled.Content>
        <Styled.Title>
          { title }
        </Styled.Title>
        { Description }
      </Styled.Content>
    </Styled.Wrapper>
  )
}

export default ListItem
