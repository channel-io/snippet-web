/* External dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

/* Internal dependencies */
import SnippetPreview from 'Storybook/SnippetPreview'
import FormProvider from 'Containers/FormProvider'
import Input from './Input'

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const id = text('id', 'id')
    const label = text('label', 'name')
    const value = text('value', 'channel.io')
    const placeholder = text('placeholder', 'Please enter your name')
    const disabled = boolean('disabled', false)
    const error = text('error', '')

    return (
      <SnippetPreview>
        <FormProvider>
          <Input
            id={id}
            label={label}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            error={error}
          />
        </FormProvider>
      </SnippetPreview>
    )
  })
  .add('With error', () => {
    const id = text('id', 'id')
    const label = text('label', 'status')
    const value = text('value', 'A')
    const placeholder = text('placeholder', 'Please enter status code')
    const disabled = boolean('disabled', false)
    const error = text('error', 'A is not number')

    return (
      <SnippetPreview>
        <FormProvider>
          <Input
            id={id}
            label={label}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            error={error}
          />
        </FormProvider>
      </SnippetPreview>
    )
  })
