/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import Colors from 'Styles/colors'

interface WrapperProps {
  active?: boolean,
}

interface ImageProps {
  src: string,
}

interface TitleProps {
  active?: boolean,
}

const LINE_HEIGHT = 18
const TITLE_MAX_LINE = 2
const DESCRIPTION_MAX_LINE = 1

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  padding: 7px 14px;
  transition: background-color ease-in-out .15s;
  cursor: ${(props) => (props.active ? 'pointer' : 'default')};

  &:hover {
    background-color: ${Colors.Grey200};
  }
`

export const Content = styled.div`
  flex: 1 1 auto;
`

/* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
export const Title = styled.p<TitleProps>`
  display: -webkit-box;
  padding: 0;
  margin: 0;
  font-size: 13px;
  word-break: break-word;
  color: ${Colors.Grey900};
  line-height: ${LINE_HEIGHT}px;
  max-height: ${LINE_HEIGHT * TITLE_MAX_LINE}px;
  overflow-y: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${TITLE_MAX_LINE};
  cursor: ${(props) => (props.active ? 'pointer' : 'inherit')};
`

export const Description = styled.p`
  display: -webkit-box;
  padding: 0;
  margin: 0;
  font-size: 12px;
  color: ${Colors.Grey500};
  line-height: ${LINE_HEIGHT}px;
  max-height: ${LINE_HEIGHT * DESCRIPTION_MAX_LINE}px;
  overflow-y: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${DESCRIPTION_MAX_LINE};
`
/* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */

export const Image = styled.div<ImageProps>`
  flex: none;
  margin-right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.src});
`
