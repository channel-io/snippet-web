import TimelineEvent from './TimelineEvent'

declare type Timeline = {
  type: 'timeline'
  hour24?: boolean
  events: TimelineEvent[]
}

export default Timeline
