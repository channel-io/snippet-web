/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import Colors from '../../styles/colors'

interface InputProps {
  hasError: boolean
}

const TEXT_LEFT_MARGIN = 3

export const Wrapper = styled.div`
  padding: 0 14px;
  margin-bottom: 6px;
`

export const Label = styled.label`
  display: block;
  color: ${Colors.Grey900};
  font-size: 13px;
  font-weight: bold;
  line-height: 18px;
  margin-bottom: 3px;
  margin-left: ${TEXT_LEFT_MARGIN}px;
`

export const Input = styled.input<InputProps>`
  font-family: inherit;
  width: 100%;
  height: 30px;
  padding: 5px 8px;
  border: solid 1px ${(props) => (props.hasError ? Colors.Orange200 : Colors.Grey300)};
  border-radius: 3px;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => (props.disabled ? Colors.Grey500 : Colors.Grey900)};
  background-color: ${(props) => (props.disabled ? Colors.Grey200 : Colors.White)};
  outline: none;
  box-shadow: none;
  appearance: none;

  &::placeholder {
    color: ${Colors.Grey500};
  }

  &:focus {
    border-color: ${Colors.Cobalt400};
  }
`

export const Error = styled.span`
  color: ${Colors.Orange400};
  font-size: 13px;
  font-weight: bold;
  line-height: 18px;
  margin-top: 4px;
  margin-left: ${TEXT_LEFT_MARGIN}px;
`
