/* External dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

/* Internal dependencies */
import SnippetPreview from '../../../storybook/SnippetPreview'
import Divider from './Divider'

storiesOf('Divider', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <SnippetPreview>
      <Divider />
    </SnippetPreview>
  ))
