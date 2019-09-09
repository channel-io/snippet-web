/* External dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

/* Internal dependencies */
import SnippetPreview from '../../../storybook/SnippetPreview'
import Image from './Image'

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const url = text('url', 'https://http.cat/418')

    return (
      <SnippetPreview>
        <Image url={url} />
      </SnippetPreview>
    )
  })
