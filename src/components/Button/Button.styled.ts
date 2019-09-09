/* External dependencies */
import styled, { css } from 'styled-components'

/* Internal dependencies */
import Colors from '../../styles/colors'
import ButtonType from './ButtonType'

interface ButtonProps {
  submitting: boolean,
  buttonType?: string,
}

interface LabelProps {
  isLink: boolean,
}

function getBackgroundColor(submitting: boolean, disabled?: boolean, style?: string) {
  if (disabled && !submitting) {
    return Colors.Grey200
  }

  if (style === ButtonType.Link || style === ButtonType.OutLine) {
    return Colors.White
  }

  return Colors.Cobalt400
}

function getFontColor(submitting: boolean, disabled?: boolean, style?: string) {
  if (disabled && !submitting) {
    return Colors.Grey500
  }

  if (style === ButtonType.Link || style === ButtonType.OutLine) {
    return Colors.Grey900
  }

  return Colors.White
}

export const Wrapper = styled.div`
  padding: 0 14px;
  margin-bottom: 8px;
`

export const Button = styled.button<ButtonProps>`
  display: block;
  width: 100%;
  padding: ${({ buttonType }) => (buttonType === ButtonType.Link ? 5 : 8)}px 0;
  font-weight: bold;
  font-size: ${({ buttonType }) => (buttonType === ButtonType.Link ? 12 : 14)}px;
  line-height: 18px;
  color: ${({ disabled, submitting, buttonType }) => (getFontColor(submitting, disabled, buttonType))};
  border: ${({ buttonType }) => (buttonType === ButtonType.OutLine ? `1px solid ${Colors.Grey300}` : 'none')};
  border-radius: 5px;
  background-color: ${({ disabled, submitting, buttonType }) => (getBackgroundColor(submitting, disabled, buttonType))};
  outline: none;
  cursor: ${({ submitting, disabled }) => ((submitting || disabled) ? 'not-allowed' : 'pointer')};
`

export const Label = styled.span<LabelProps>`
  ${(props) => (props.isLink && css`
    padding: 2px 15px;
    border-radius: 22px;

    &:hover {
      background-color: ${Colors.Grey200};
    }
  `)}
`
