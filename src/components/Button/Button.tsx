/* External dependencies */
import React, {
  useContext,
  useMemo,
  useCallback,
  ReactElement,
} from 'react'

/* Internal dependencies */
import ActionType from 'Constants/ActionType'
import Loader from 'Components/Loader'
import FormContext from 'Contexts/FormContext'
import isString from 'Utils/isString'
import isBoolean from 'Utils/isBoolean'
import isObject from 'Utils/isObject'
import Colors from 'Styles/colors'
import ButtonType from './ButtonType'
import * as Styled from './Button.styled'

interface ButtonProps {
  id?: string,
  label?: string,
  style?: string,
  disabled?: boolean,
  action?: {
    type: ActionType,
    url?: string,
  },
}

function Button({
  id,
  label,
  style,
  action,
  disabled,
}: ButtonProps): ReactElement | null {
  const { submitting, submit } = useContext(FormContext)

  const loaderColor = useMemo(() => {
    if (style === ButtonType.Link || style === ButtonType.OutLine) {
      return Colors.Grey500
    }

    return Colors.White
  }, [style])

  const content = useMemo(() => {
    if (submitting) {
      return (
        <Loader
          size={style === ButtonType.Link ? 14 : 18}
          color={loaderColor}
        />
      )
    }

    if (!label) {
      return null
    }

    return (
      <Styled.Label isLink={style === ButtonType.Link}>
        { label }
      </Styled.Label>
    )
  }, [submitting, loaderColor, label, style])

  const handleOnClick = useCallback(() => {
    if (!isObject(action)) {
      return
    }

    if (action.type === ActionType.URL && isString(action.url)) {
      const w = window.parent || window
      w.open(action.url, '_blank', 'noopener')
      return
    }

    if (action.type === ActionType.Submit && isString(id)) {
      submit(id)
    }
  }, [submit, id, action])

  if (!isString(id) || !isString(label)) {
    return null
  }

  return (
    <Styled.Wrapper>
      <Styled.Button
        onClick={handleOnClick}
        disabled={submitting || isBoolean(disabled) ? disabled : false}
        submitting={submitting}
        buttonType={style}
      >
        { content }
      </Styled.Button>
    </Styled.Wrapper>
  )
}

export default Button
