/* External dependencies */
import React, {
  useContext,
  useEffect,
  useCallback,
  useState,
  ReactElement,
  ChangeEvent,
  useMemo,
} from 'react'

/* Internal dependencies */
import FormContext from '../../contexts/FormContext'
import isNumber from '../../utils/isNumber'
import isString from '../../utils/isString'
import isBoolean from '../../utils/isBoolean'
import * as Styled from './Input.styled'

interface InputProps {
  id?: string
  value?: string
  label?: string
  placeholder?: string
  disabled?: boolean
  error?: string
}

function Input({
  id,
  value,
  label,
  placeholder,
  disabled,
  error,
}: InputProps): ReactElement | null {
  const {
    removeInput,
    updateInput,
    values,
    submitting,
  } = useContext(FormContext)

  useEffect(() => {
    if (isString(id) && (isString(value) || isNumber(value))) {
      updateInput(id, value)
    }

    return () => {
      if (isString(id)) {
        removeInput(id)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (isString(error) && error) {
      setHasError(true)
    }
  }, [error])

  const inputValue = useMemo(() => {
    if (isString(id)) {
      const contextValue = values[id]

      if (isString(contextValue) || isNumber(contextValue)) {
        return contextValue
      }
    }

    if (isString(value) || isNumber(value)) {
      return value
    }

    return undefined
  }, [values, id, value])

  const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    updateInput((id as string), event.target.value)
    setHasError(false)
  }, [updateInput, id])

  if (!isString(id)) return null

  return (
    <Styled.Wrapper>
      { label && (<Styled.Label>{ label }</Styled.Label>) }
      <Styled.Input
        onChange={handleOnChange}
        value={inputValue}
        placeholder={placeholder}
        disabled={submitting || (isBoolean(disabled) ? disabled : false)}
        hasError={hasError}
      />
      { hasError && (<Styled.Error>{ error }</Styled.Error>) }
    </Styled.Wrapper>
  )
}

export default Input
