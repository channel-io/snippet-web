/* External dependencies */
import styled from 'styled-components'


interface SpacerProps {
  size?: string
}

function getHeight(size?: string) {
  switch (size) {
    case 'xs':
      return '4px'
    case 's':
      return '8px'
    case 'm':
      return '16px'
    case 'l':
      return '24px'
    default:
      return '4px'
  }
}

export const Spacer = styled.div<SpacerProps>`
  width: 100%;
  height: ${(props) => getHeight(props.size)};
`
