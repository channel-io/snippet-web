/* External dependencies */
import React, { ReactElement } from 'react'

/* Internal dependencies */
import Button from 'Components/Button'
import Divider from 'Components/Divider'
import Dropdown from 'Components/Dropdown'
import Input from 'Components/Input'
import Image from 'Components/Image'
import KeyValue from 'Components/KeyValue'
import List from 'Components/List'
import ListItem from 'Components/ListItem'
import Spacer from 'Components/Spacer'
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
    case ComponentType.Button:
      return Button
    case ComponentType.Divider:
      return Divider
    case ComponentType.Dropdown:
      return Dropdown
    case ComponentType.Image:
      return Image
    case ComponentType.KeyValue:
      return KeyValue
    case ComponentType.List:
      return List
    case ComponentType.ListItem:
      return ListItem
    case ComponentType.Spacer:
      return Spacer
    case ComponentType.Input:
      return Input
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
