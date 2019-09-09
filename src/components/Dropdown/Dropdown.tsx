/* External dependencies */
import React, {
  useMemo,
  useCallback,
  useState,
  useRef,
  useContext,
  useEffect,
} from 'react'

/* Internal dependencies */
import FormContext from '../../contexts/FormContext'
import useContainer from '../../hooks/useContainer'
import isString from '../../utils/isString'
import isNumber from '../../utils/isNumber'
import isObject from '../../utils/isObject'
import isBoolean from '../../utils/isBoolean'
import TriangelDownImage from '../../styles/images/dropdown-triangle-down.svg'
import TriangelUpImage from '../../styles/images/dropdown-triangle-up.svg'
import * as Styled from './Dropdown.styled'

const MARGIN_BOTTOM = 10

interface Option {
  id: string,
  label: string,
}

interface DropdownProps {
  id?: string,
  label?: string,
  value?: string,
  items?: Option[],
  error?: string,
  disabled?: boolean,
}

function Dropdown({
  id,
  label,
  value,
  items,
  error,
  disabled,
}: DropdownProps) {
  const [maxHeight, setMaxHeight] = useState(0)

  const [show, setShow] = useState(false)
  const [toTop, setToTop] = useState(false)
  const [hasError, setHasError] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const optionRef = useRef<HTMLDivElement>(null)

  const container = useContainer()

  const {
    values,
    submitting,
    updateInput,
    removeInput,
  } = useContext(FormContext)

  useEffect(() => {
    if (isString(id) && (isString(value) || isNumber(value))) {
      updateInput(id, value)
    }

    const handleOnClickDocument = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShow(false)
      }
    }

    document.addEventListener('mousedown', handleOnClickDocument)

    return () => {
      document.removeEventListener('mousedown', handleOnClickDocument)

      if (isString(id)) {
        removeInput(id)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isString(error) && error) {
      setHasError(true)
    }
  }, [error])

  const selectedId = useMemo(() => {
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

  const handleOnClick = useCallback(() => {
    if (submitting || !container || !targetRef.current) { return }

    if (show) {
      setShow(false)
      return
    }

    const containerRect = container.getBoundingClientRect()
    const targetRect = targetRef.current.getBoundingClientRect()

    const topSpaceHeight = targetRect.top - containerRect.top
    const bottomSpaceHeight = containerRect.bottom - targetRect.bottom
    const isTopSpaceBigger = topSpaceHeight > bottomSpaceHeight

    const maxSpaceHeight = (isTopSpaceBigger) ? topSpaceHeight : bottomSpaceHeight

    setMaxHeight(maxSpaceHeight - MARGIN_BOTTOM)
    setToTop(isTopSpaceBigger)
    setShow(true)
  }, [show, container, submitting])

  const handleOnClickItem = useCallback((optionID: string) => {
    setHasError(false)
    setShow(false)

    if (optionID === selectedId) {
      removeInput(id as string)
      return
    }

    updateInput(id as string, optionID)
  }, [id, selectedId, removeInput, updateInput])

  const optionItems = useMemo(() => {
    if (!Array.isArray(items)) return null

    return items.map((option) => {
      if (!isObject(option) || !isString(option.id) || !isString(option.label)) {
        return null
      }

      return (
        <Styled.OptionItem
          key={option.id}
          onClick={() => handleOnClickItem(option.id)}
          selected={option.id === selectedId}
        >
          { option.label }
        </Styled.OptionItem>
      )
    })
  }, [items, handleOnClickItem, selectedId])

  const Options = useMemo(() => {
    if (!show) return null
    return (
      <Styled.OptionWrapper
        ref={optionRef}
        maxHeight={maxHeight}
        toTop={toTop}
      >
        { optionItems }
      </Styled.OptionWrapper>
    )
  }, [show, maxHeight, optionItems, toTop])

  const isDisabled = useMemo(() => (submitting || (
    isBoolean(disabled) ? disabled : false)
  ), [submitting, disabled])

  const Label = useMemo(() => {
    if (isString(id) && isString(values[id])) {
      const selectedItem = items && items.find((item) => (item.id === values[id]))

      if (selectedItem && isObject(selectedItem) && isString(selectedItem.label)) {
        return (
          <Styled.Label disabled={isDisabled}>
            { selectedItem.label }
          </Styled.Label>
        )
      }
    }

    return (
      <Styled.Label
        unselected
        disabled={isDisabled}
      >
        { label }
      </Styled.Label>
    )
  }, [values, items, label, id, isDisabled])

  const arrowImage = useMemo(() => (show ? TriangelUpImage : TriangelDownImage), [show])

  if (!isString(id) || !isString(label)) {
    return null
  }

  return (
    <Styled.Wrapper ref={wrapperRef}>
      <Styled.Content>
        <Styled.Select
          ref={targetRef}
          onClick={handleOnClick}
          disabled={isDisabled}
          hasError={hasError}
        >
          { Label }
          <img src={arrowImage} alt="dropdown arrow" />
        </Styled.Select>
        { hasError && (<Styled.Error>{ error }</Styled.Error>) }
      </Styled.Content>
      { Options }
    </Styled.Wrapper>
  )
}

export default Dropdown
