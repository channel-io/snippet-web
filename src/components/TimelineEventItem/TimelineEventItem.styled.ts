/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import Colors from '../../styles/colors'
import { absoluteCenter, ellipsis } from '../../styles/Mixins'
import EventColor, { getBackgroundColor, getBorderColor } from './EventColor'

interface MarkProps {
  color?: EventColor | string
}

interface TimeProps {
  hour24?: boolean
}

const EventItemHeight = 28
const MarkWrapperSize = 24
const MarkSize = 8

export const Mark = styled.div<MarkProps>`
  position: relative;
  width: ${MarkWrapperSize}px;
  height: ${MarkWrapperSize}px;
  min-width: ${MarkWrapperSize}px;
  min-height: ${MarkWrapperSize}px;

  &::after {
    ${absoluteCenter}
    width: ${MarkSize}px;
    height: ${MarkSize}px;
    background-color: ${props => getBackgroundColor(props.color)};
    border-radius: 50%;
    border: solid 2px ${props => getBorderColor(props.color)};
    content: '';
    z-index: 2;
  }
`

export const Time = styled.div<TimeProps>`
  ${props => (props.hour24 ? `
    width: 40px;
    min-width: 40px;
  ` : `
    width: 66px;
    min-width: 66px;
  `)}
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  color: ${Colors.Grey500};
`

export const Value = styled.div`
  ${ellipsis}
  flex: 1 1 auto;
  font-size: 14px;
  line-height: 18px;
  color: ${Colors.Grey900};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: ${EventItemHeight}px;
  padding: 5px 6px;

  &:not(:first-child) {
    ${Mark} {
      &::before {
        ${absoluteCenter}
        top: 0;
        width: 2px;
        height: ${EventItemHeight}px;
        background-color: ${Colors.Grey300};
        content: '';
      }
    }
  }
`
