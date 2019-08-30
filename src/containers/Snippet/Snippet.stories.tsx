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
        type: 'image',
        url: 'https://http.cat/200',
      },
      {
        type: 'image',
        url: 'https://http.cat/404',
      },
      {
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
