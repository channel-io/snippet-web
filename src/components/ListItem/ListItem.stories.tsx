/* External dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object } from '@storybook/addon-knobs'

/* Internal dependencies */
import SnippetPreview from 'Storybook/SnippetPreview'
import ListItem from './ListItem'

storiesOf('ListItem', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const title = text('title', 'Channel.io')
    const description = text('description', 'Live Chat and Team Communication')
    const image = text('image', 'https://http.cat/200')
    const url = text('url', '')

    return (
      <SnippetPreview>
        <ListItem
          title={title}
          image={image}
          description={description}
          url={url}
        />
        <ListItem
          title={title}
          image={image}
          description={description}
          url={url}
        />
      </SnippetPreview>
    )
  })
  .add('Basic with url', () => {
    const title = text('title', 'Channel.io')
    const description = text('description', 'Live Chat and Team Communication')
    const image = text('image', 'https://http.cat/200')
    const url = text('url', 'https://channel.io')

    return (
      <SnippetPreview>
        <ListItem
          title={title}
          image={image}
          description={description}
          url={url}
        />
        <ListItem
          title={title}
          image={image}
          description={description}
          url={url}
        />
      </SnippetPreview>
    )
  })
  .add('With long title', () => {
    const title = text('title', [
      'Don’t lose your website customers Use Channel, ',
      'the messenger for customer acquisition https://channel.io',
    ].join(''))

    const description = text('description', [
      'Where your team and customers come together. ',
      'Increase conversion rates by engaging customers and ',
      'boost your productivity/communicate/collaborate with your team in one place',
    ].join(''))

    const image = text('image', 'https://http.cat/200')

    return (
      <SnippetPreview>
        <ListItem
          title={title}
          image={image}
          description={description}
        />
        <ListItem
          title={title}
          image={image}
          description={description}
        />
      </SnippetPreview>
    )
  })
  .add('With collapse', () => {
    const title = text('title', 'Channel.io')
    const description = text('description', 'Live Chat and Team Communication')
    const image = text('image', 'https://http.cat/200')
    const collapse = object('collapse', [
      {
        id: 'collapse-item-1',
        type: 'list-item',
        title: 'collasped item',
        image: 'https://http.cat/204',
      },
    ])

    return (
      <SnippetPreview>
        <ListItem
          title={title}
          image={image}
          description={description}
          collapse={collapse}
        />
      </SnippetPreview>
    )
  })
