/* External dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

/* Internal dependencies */
import SnippetPreview from 'Storybook/SnippetPreview'
import Text from './Text'

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const textProp = text('text', 'channel.io')

    const style = select('style', [
      'h1',
      'h2',
      'paragraph',
    ], 'paragraph')

    const color = select('color', [
      'default',
      'muted',
      'success',
      'highlited',
      'warning',
    ], '')

    return (
      <SnippetPreview>
        <Text
          text={textProp}
          color={color}
          style={style}
        />
      </SnippetPreview>
    )
  })
  .add('All', () => {
    const textProp = text('text', 'channel.io')

    const color = select('color', [
      'default',
      'muted',
      'success',
      'highlited',
      'warning',
    ], '')

    return (
      <SnippetPreview>
        <Text
          text={textProp}
          color={color}
          style="h1"
        />
        <Text
          text={textProp}
          color={color}
          style="h2"
        />
        <Text
          text={textProp}
          color={color}
        />
      </SnippetPreview>
    )
  })
