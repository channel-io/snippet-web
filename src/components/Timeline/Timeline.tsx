/* External dependencies */
import React, { ReactElement, useMemo, useCallback } from 'react'

/* Internal dependencies */
import TimelineType from '../../types/Timeline'
import isEmpty from '../../utils/isEmpty'
import isNil from '../../utils/isNil'
import isNumber from '../../utils/isNumber'
import toDateString from '../../utils/toDateString'
import EventColor from '../TimelineEventItem/EventColor'
import TimelineEventItem from '../TimelineEventItem'
import { Wrapper, GroupLabel, GroupLabelContent } from './Timeline.styled'

interface TimelineProps extends TimelineType {}

type EventItem = {
  date: Date
  value: string
  color?: EventColor | string
  hour24?: boolean
}

type GroupedEventItems = {
  [label: string]: EventItem[]
}

function Timeline({ events, hour24 }: TimelineProps): ReactElement | null {
  const eventItems: GroupedEventItems = useMemo(() => {
    if (!Array.isArray(events) || isEmpty(events)) {
      return {}
    }
    const _mapped = events
      .filter((event) => (!isNil(event.ts) && isNumber(event.ts) && !isEmpty(event.value)))
      .sort((event1, event2) => {
        if (event1.ts < event2.ts) { return 1 }
        if (event1.ts > event2.ts) { return -1 }
        return 0
      })
      .map((event) => ({
        date: new Date(event.ts),
        value: event.value,
        color: event.color,
        hour24,
      } as EventItem))
    return _mapped.reduce((result, event) => {
      const dateString = toDateString(event.date)
      if (!isEmpty(result[dateString])) {
        result[dateString].push(event)
      } else {
        result[dateString] = []
        result[dateString].push(event)
      }
      return result
    }, {} as GroupedEventItems)
  }, [
    events,
    hour24,
  ])

  const makeLabel = useCallback((label: string) => {
    const TODAY = new Date()
    const TODAY_STRING = toDateString(TODAY)
    const YESTERDAY_STRING = toDateString(new Date().setDate(TODAY.getDate() - 1))

    if (label === TODAY_STRING) { return 'Today' }
    if (label === YESTERDAY_STRING) { return 'Yesterday' }
    return label
  }, [])

  const TimelineContentComponent = useMemo(() => (
    Object.keys(eventItems).map((label) => (
      <div>
        <GroupLabel>
          <GroupLabelContent data-groupid={label}>
            { makeLabel(label) }
          </GroupLabelContent>
        </GroupLabel>

        <div>
          { eventItems[label].map(({ value, ...others }) => (
            <TimelineEventItem {...others}>
              { value }
            </TimelineEventItem>
          )) }
        </div>
      </div>
    ))
  ), [
    makeLabel,
    eventItems,
  ])

  if (isEmpty(eventItems)) {
    return null
  }

  return (
    <Wrapper>
      { TimelineContentComponent }
    </Wrapper>
  )
}

export default Timeline
