import ComponentType from '../constants/ComponentType'
import TimelineEvent from './TimelineEvent'

declare type Timeline = {
  id?: string
  type: ComponentType.Timeline
  hour24?: boolean
  events: TimelineEvent[]
}

export default Timeline
