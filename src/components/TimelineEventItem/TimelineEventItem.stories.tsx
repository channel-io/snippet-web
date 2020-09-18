/* External dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select, date, boolean } from '@storybook/addon-knobs'

/* Internal dependencies */
import SnippetPreview from '../../../storybook/SnippetPreview'
import EventColor, { values } from './EventColor'
import TimelineEventItem from './TimelineEventItem'

storiesOf('TimelineEventItem', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const datetime = date('date', new Date())
    const value = text('value', '아침 루틴 체크 - 세안, 토너, 로션, BB크림')
    const color = select('color', values, EventColor.White)
    const hour24 = boolean('24-hour', true)

    return (
      <SnippetPreview>
        <TimelineEventItem
          date={new Date(datetime)}
          color={color}
          hour24={hour24}
        >
          { value }
        </TimelineEventItem>
      </SnippetPreview>
    )
  })
  .add('Multiple events', () => (
    <SnippetPreview>
      <>
        <TimelineEventItem
          date={new Date(new Date().setHours(16, 42))}
          color={EventColor.White}
          hour24
        >
          아침 루틴 체크 - 세안, 토너, 로션, BB크림
          Check morning routine - Wash, Toner
        </TimelineEventItem>
        <TimelineEventItem
          date={new Date(new Date().setHours(16, 43))}
          color={EventColor.Green}
          hour24
        >
          선크림 체크
        </TimelineEventItem>
        <TimelineEventItem
          date={new Date(new Date().setHours(16, 45))}
          color={EventColor.Cobalt}
          hour24
        >
          자동메시지 발송
        </TimelineEventItem>
        <TimelineEventItem
          date={new Date(new Date().setHours(16, 53))}
          color={EventColor.Orange}
          hour24
        >
          음성메시지 확인
        </TimelineEventItem>
      </>
    </SnippetPreview>
  ))
