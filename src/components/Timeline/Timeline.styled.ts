/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import Colors from '../../styles/colors'

export const Wrapper = styled.div`
  padding: 8px 0;
`

export const GroupLabel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 24px;
  padding: 0 14px;
`

export const GroupLabelContent = styled.span`
  font-size: 13px;
  font-weight: bold;
  line-height: 16px;
  color: ${Colors.Grey500};
  cursor: pointer;

  &::after {
    position: absolute;
    box-sizing: border-box;
    z-index: 3;
    top: 100%;
    left: 14px;
    min-height: 36px;
    padding: 9px 14px;
    border-radius: 6px;
    backdrop-filter: blur(20px);
    box-shadow: 0 4px 20px 0 ${Colors.Black20}, 0 0 2px 0 ${Colors.Black5};
    background-color: rgba(36, 36, 40, .9);
    font-size: 14px;
    line-height: 18px;
    color: ${Colors.White};
    opacity: 0;
    pointer-events: none;
    content: attr(data-groupid);
    transition: opacity .1s cubic-bezier(.72, .36, .09, .99) .5s;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
`
