/* External dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'

/* Internal dependencies */
import SnippetPreview from 'Storybook/SnippetPreview'
import KeyValue from './KeyValue'

storiesOf('KeyValue', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const items = object('items', [
      {
        key: 'Plugin',
        value: 'channel.io',
      },
      {
        key: 'Trigger',
        value: 'PushBot',
      },
      {
        key: 'Category',
        value: 'Enhancements',
      },
    ])

    return (
      <SnippetPreview>
        <KeyValue items={items} />
      </SnippetPreview>
    )
  })
