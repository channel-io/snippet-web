/* External dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'

/* Internal dependencies */
import SnippetPreview from '../../../storybook/SnippetPreview'
import EventColor from '../TimelineEventItem/EventColor'
import Timeline from './Timeline'

const SAMPLE = [
  { ts: +new Date(), value: 'Today is the day' },

  { ts: +new Date(2020, 8, 17, 17, 23), value: 'Send automated message', color: EventColor.Orange },
  { ts: +new Date(2020, 8, 18, 7, 15), value: 'Check morning routine - Wash, Toner', color: EventColor.Green },
  { ts: +new Date(2020, 8, 18, 7, 34), value: 'Check Suncream' },
  { ts: +new Date(2020, 8, 18, 12, 30), value: 'Check voice message', color: EventColor.Cobalt },

  { ts: +new Date(2020, 8, 19, 7, 15), value: 'Check morning routine - Wash, Toner', color: EventColor.Green },
  { ts: +new Date(2020, 8, 19, 7, 34), value: 'Check Suncream' },
  { ts: +new Date(2020, 8, 19, 12, 30), value: 'Check voice message', color: EventColor.Cobalt },

  { ts: +new Date(2020, 8, 20, 7, 15), value: 'Check morning routine - Wash, Toner', color: EventColor.Green },
  { ts: +new Date(2020, 8, 20, 7, 34), value: 'Check Suncream' },
  { ts: +new Date(2020, 8, 20, 12, 30), value: 'Check voice message', color: EventColor.Cobalt },
]

storiesOf('Timeline', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const events = object('events', SAMPLE)

    return (
      <SnippetPreview>
        <Timeline
          events={events}
          hour24
        />
      </SnippetPreview>
    )
  })
