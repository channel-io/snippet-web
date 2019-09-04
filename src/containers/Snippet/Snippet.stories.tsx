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
        id: 'list',
        type: 'list',
        items: [
          {
            id: 'list-item-1',
            title: 'Channel.io',
            description: 'Live Chat and Team Communication',
            image: 'https://http.cat/200',
            url: 'https://channel.io',
          },
          {
            id: 'list-item-2',
            title: 'Walkinsights',
            description: 'Offline Customer Analytics',
            image: 'https://http.cat/418',
            url: 'https://walkinsights.com',
          },
        ],
      },
    ])

    return (
      <SnippetPreview>
        <Snippet items={items} />
      </SnippetPreview>
    )
  })
