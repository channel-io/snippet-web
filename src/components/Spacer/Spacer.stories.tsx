/* External dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import styled from 'styled-components'

/* Internal dependencies */
import SnippetPreview from '../../../storybook/SnippetPreview'
import Spacer from './Spacer'

const DummyContent = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  background-color: blue;
  padding: 14px;
`

storiesOf('Spacer', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const size = select('size', {
      'xs (4px)': 'xs',
      's (8px)': 's',
      'm (16px)': 'm',
      'l (24px)': 'l',
    }, 'xs')

    return (
      <SnippetPreview>
        <DummyContent>Spacer ↓↓↓</DummyContent>
        <Spacer size={size} />
        <DummyContent>Spacer ↑↑↑</DummyContent>
      </SnippetPreview>
    )
  })
