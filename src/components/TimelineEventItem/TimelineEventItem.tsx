/* External dependencies */
import React, { useMemo } from 'react'

/* Internal Dependencies */
import leadingZero from '../../utils/leadingZero'
import EventColor from './EventColor'
import { Wrapper, Mark, Time, Value } from './TimelineEventItem.styled'

export interface TimelineEventItemProps extends React.HTMLAttributes<HTMLDivElement> {
  date: Date
  color?: EventColor | string
  hour24?: boolean
}

function TimelineEventItem({
  date,
  color = EventColor.White,
  hour24 = false,
  children,
}: TimelineEventItemProps) {
  const formattedTime = useMemo(() => {
    const result: string[] = []
    if (date && date instanceof Date) {
      if (hour24) {
        result.push(leadingZero(date.getHours()))
      } else {
        result.push(date.getHours() > 12 ? `${leadingZero(date.getHours() - 12)}` : leadingZero(date.getHours()))
      }
      result.push(':')
      result.push(date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`)

      if (!hour24) {
        result.push(date.getHours() >= 12 ? ' PM' : ' AM')
      }
    }
    return result.join('')
  }, [
    date,
    hour24,
  ])

  return (
    <Wrapper>
      <Mark color={color} />
      <Time hour24={hour24}>{ formattedTime }</Time>
      <Value>{ children }</Value>
    </Wrapper>
  )
}

export default TimelineEventItem
