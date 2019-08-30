/* External dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'

/* Internal dependencies */
import SnippetPreview from 'Storybook/SnippetPreview'
import Snippet from './Snippet'

storiesOf('Snippet', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const items = object('items', [
      {
        id: 'image',
        type: 'image',
        url: 'https://http.cat/200',
      },
      {
        id: 'divider-1',
        type: 'divider',
      },
      {
        id: 'key-value',
        type: 'key-value',
        items: [
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
        ],
      },
      {
        id: 'divider-2',
        type: 'divider',
      },
      {
        id: 'image-cat',
        type: 'image',
        url: 'https://http.cat/418',
      },
    ])

    return (
      <SnippetPreview>
        <Snippet items={items} />
      </SnippetPreview>
    )
  })
