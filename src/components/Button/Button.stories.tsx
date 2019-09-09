/* External dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  text,
  boolean,
  select,
  object,
} from '@storybook/addon-knobs'

/* Internal dependencies */
import SnippetPreview from '../../../storybook/SnippetPreview'
import Main from '../../containers/Main'
import Button from './Button'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const id = text('id', 'button')
    const label = text('label', 'Save')

    const style = select('style', [
      'default',
      'outline',
      'link',
    ], 'default')

    const disabled = boolean('disabled', false)

    return (
      <SnippetPreview>
        <Button
          id={id}
          style={style}
          label={label}
          disabled={disabled}
        />
      </SnippetPreview>
    )
  })
  .add('With url action', () => {
    const id = text('id', 'button')
    const label = text('label', 'Save')

    const style = select('style', [
      'default',
      'outline',
      'link',
    ], 'default')

    const disabled = boolean('disabled', false)

    const action = object('action', {
      type: 'url',
      url: 'https://channel.io',
    })

    return (
      <SnippetPreview>
        <Button
          id={id}
          style={style}
          label={label}
          disabled={disabled}
          action={action}
        />
      </SnippetPreview>
    )
  })
  .add('All Styles', () => (
    <SnippetPreview>
      <Button
        id="default"
        label="default"
      />
      <Button
        id="outline"
        label="outline"
        style="outline"
      />
      <Button
        id="link"
        label="link"
        style="link"
      />
    </SnippetPreview>
  ))
  .add('All with loading', () => (
    <SnippetPreview>
      <Main
        submitting
        layout={[
          {
            id: 'default',
            type: 'button',
            label: 'default',
            style: 'default',
          },
          {
            id: 'outline',
            type: 'button',
            label: 'outline',
            style: 'outline',
          },
          {
            id: 'link',
            type: 'button',
            label: 'link',
            style: 'link',
          },
        ]}
      />
    </SnippetPreview>
  ))
