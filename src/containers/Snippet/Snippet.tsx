/* External dependencies */
import React, { ReactElement } from 'react'

/* Internal dependencies */
import Button from '../../components/Button'
import Divider from '../../components/Divider'
import Dropdown from '../../components/Dropdown'
import Input from '../../components/Input'
import Image from '../../components/Image'
import KeyValue from '../../components/KeyValue'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import Spacer from '../../components/Spacer'
import Text from '../../components/Text'
import ComponentType from '../../constants/ComponentType'
import isObject from '../../utils/isObject'
import isString from '../../utils/isString'

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
    case ComponentType.Text:
      return Text
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
