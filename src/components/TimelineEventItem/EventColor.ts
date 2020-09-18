/* Internal dependencies */
import _values from '../../utils/values'
import Colors from '../../styles/colors'

enum EventColor {
  White = 'white',
  Blue = 'blue',
  Cobalt = 'cobalt',
  Orange = 'orange',
  Red = 'red',
  Green = 'green',
}

export default EventColor

export const values: string[] = _values(EventColor)

export const EventColorMap: { [key: string]: Colors } = {
  [EventColor.White]: Colors.White,
  [EventColor.Blue]: Colors.Blue400,
  [EventColor.Cobalt]: Colors.Cobalt400,
  [EventColor.Orange]: Colors.Orange400,
  [EventColor.Red]: Colors.Red400,
  [EventColor.Green]: Colors.Green400,
}

export const EventColorBorderMap: { [key: string]: Colors } = {
  [EventColor.White]: Colors.Grey500,
  [EventColor.Blue]: Colors.Blue400,
  [EventColor.Cobalt]: Colors.Cobalt400,
  [EventColor.Orange]: Colors.Orange400,
  [EventColor.Red]: Colors.Red400,
  [EventColor.Green]: Colors.Green400,
}

export function getBackgroundColor(preferredColor: EventColor | string = EventColor.White): Colors {
  return EventColorMap[preferredColor] || EventColorMap[EventColor.White]
}

export function getBorderColor(preferredColor: EventColor | string = EventColor.White): Colors {
  return EventColorBorderMap[preferredColor] || EventColorBorderMap[EventColor.White]
}
