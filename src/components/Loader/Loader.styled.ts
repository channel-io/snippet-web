/* External dependencies */
import styled, { keyframes } from 'styled-components'

/* Internal dependencies */
import Colors from 'Styles/colors'

interface LoaderProps {
  position?: string,
  top?: number,
  right?: number,
  left?: number,
  bottom?: number,
  size?: number,
  strokeWidth?: number,
}

const loaderAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div<LoaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.size || 35)}px;

  &::before {
    content: '';
    display: block;
    width: ${(props) => (props.size ? (props.size / 2) : 35)}px;
    height: ${(props) => (props.size ? (props.size / 2) : 35)}px;
    border: ${(props) => (props.strokeWidth || 2)}px solid ${(props) => (props.color || Colors.Grey500)};
    border-right-color: transparent;
    background-color: transparent;
    border-radius: 50%;
    animation: ${loaderAnimation} 1.1s infinite linear;
  }
`

export default Loader
