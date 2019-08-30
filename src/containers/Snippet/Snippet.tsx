/* External dependencies */
import React, { ReactElement } from 'react'

/* Internal dependencies */
import Divider from 'Components/Divider'
import Image from 'Components/Image'
import KeyValue from 'Components/KeyValue'
import ComponentType from 'Constants/ComponentType'
import isObject from 'Utils/isObject'
import isString from 'Utils/isString'

interface SnippetProps {
  items: any,
}

interface Item {
  id?: string,
  type?: string,
}

function getComponent(type?: string) {
  switch (type) {
    case ComponentType.Divider:
      return Divider
    case ComponentType.Image:
      return Image
    case ComponentType.KeyValue:
      return KeyValue
    default:
      return null
  }
}

function renderItems(item: any) {
  if (!isObject(item)) {
    return null
  }

  const componentType = isString((item as Item).type) ? (item as Item).type : undefined
  const SnippetComponent = getComponent(componentType)

  if (!SnippetComponent) {
    return null
  }

  const key = isString((item as Item).id) ? (item as Item).id : undefined

  return (
    <SnippetComponent
      {...item}
      id={key}
      key={key}
    />
  )
}

function Snippet({ items }: SnippetProps): ReactElement | null {
  if (!Array.isArray(items)) {
    return null
  }

  return (
    <>
      { items.map(renderItems) }
    </>
  )
}

export default Snippet