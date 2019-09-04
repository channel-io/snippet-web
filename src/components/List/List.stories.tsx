/* External dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'

/* Internal dependencies */
import SnippetPreview from 'Storybook/SnippetPreview'
import List from './List'

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const items = object('items', [
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
    ])

    return (
      <SnippetPreview>
        <List
          id="list"
          items={items}
        />
      </SnippetPreview>
    )
  })
