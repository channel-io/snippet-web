/* External dependencies */
import styled, { css } from 'styled-components'

/* Internal dependencies */
import Colors from '../../styles/colors'

interface OptionWrapperProps {
  toTop: boolean
}

interface SelectProps {
  disabled: boolean
  hasError: boolean
}

interface LabelProps {
  unselected?: boolean
  disabled: boolean
}

interface OptionItemProps {
  selected: boolean
}

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 8px;
`

export const Content = styled.div`
  margin: 0 14px;
`

export const Select = styled.div<SelectProps>`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 5px 8px;
  font-size: 14px;
  line-height: 18px;
  background-color: ${(props) => (props.disabled ? Colors.Grey200 : Colors.White)};
  color: ${Colors.Grey500};
  border: solid 1px ${(props) => (props.hasError ? Colors.Orange200 : Colors.Grey300)};
  border-radius: 3px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    border-color: ${(props) => (props.disabled ? Colors.Grey300 : Colors.Cobalt400)};
  }
`

export const Label = styled.span<LabelProps>`
  flex: 1 1 auto;
  color: ${({ disabled, unselected }) => ((disabled || unselected) ? Colors.Grey500 : Colors.Grey900)};
`

export const OptionWrapper = styled.div<OptionWrapperProps>`
  width: 100%;
  background-color: ${Colors.White};
  padding: 8px 0;
  position: absolute;
  z-index: 10;
  max-height: 345px;
  overflow-y: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 ${Colors.Black20}, 0 0 0 1px ${Colors.Black5};
  ${(props) => (props.toTop ? css`
    bottom: 33px;
  ` : css`
    top: 33px;
  `)}
`

export const OptionItem = styled.div<OptionItemProps>`
  background-color: ${(props) => (props.selected ? Colors.Grey200 : Colors.White)};
  height: 32px;
  padding: 7px 16px;
  font-size: 14px;
  line-height: 18px;
  font-weight: normal;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.Grey200};
  }
`

export const Error = styled.span`
  color: ${Colors.Orange400};
  font-size: 13px;
  font-weight: bold;
  line-height: 18px;
  margin-top: 4px;
  margin-left: 5px;
`
