/* External dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

/* Internal dependencies */
import SnippetPreview from '../../../storybook/SnippetPreview'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FormProvider from './FormProvider'

storiesOf('FormProvider', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const submitting = boolean('submitting', false)
    const onSubmit = action('onSubmit')

    return (
      <SnippetPreview>
        <FormProvider
          submitting={submitting}
          onSubmit={onSubmit}
        >
          <Input
            id="email"
            label="email"
            placeholder="Please enter your email"
          />
          <Input
            id="name"
            label="name"
            placeholder="Please enter your name"
          />
          <Button
            id="submit"
            label="Submit"
            action={{
              type: 'submit',
            }}
          />
        </FormProvider>
      </SnippetPreview>
    )
  })
