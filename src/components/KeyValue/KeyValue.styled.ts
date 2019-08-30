/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import Colors from 'Styles/colors'

export const Wrapper = styled.div`
  margin-bottom: 8px;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 14px;
`

export const Key = styled.span`
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;
  color: ${Colors.Grey500};
  margin-right: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const Value = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: ${Colors.Grey900};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
