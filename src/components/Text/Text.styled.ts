/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import Colors from '../../styles/colors'
import TextColors from './TextColors'
import TextStyles from './TextStyles'

const SUPPORTED_ALIGN = ['center', 'left', 'right']

interface TextProps {
  textStyle?: string,
  textColor?: string,
  align?: string,
}

function getFontSize(style?: string): number {
  switch (style) {
    case TextStyles.H1:
      return 18
    case TextStyles.H2:
    case TextStyles.Paragraph:
    default:
      return 12
  }
}

function getFontWeight(style?: string): string {
  switch (style) {
    case TextStyles.H1:
    case TextStyles.H2:
      return 'bold'
    default:
      return 'normal'
  }
}

function getFontColor(color?: string): string {
  switch (color) {
    case TextColors.Muted:
      return Colors.Grey500
    case TextColors.Success:
      return Colors.Green400
    case TextColors.Highlited:
      return Colors.Cobalt400
    case TextColors.Warning:
      return Colors.Orange400
    default:
      return Colors.Grey900
  }
}

function getAlign(align?: string) {
  if (SUPPORTED_ALIGN.includes(align as string)) {
    return align
  }
  return 'left'
}

function getMarginTop(style?: string): number {
  switch (style) {
    case TextStyles.H1:
      return 6
    case TextStyles.H2:
    case TextStyles.Paragraph:
    default:
      return 4
  }
}

function getMarginBottom(style?: string): number {
  switch (style) {
    case TextStyles.H1:
      return 6
    case TextStyles.H2:
    case TextStyles.Paragraph:
    default:
      return 3
  }
}

export const Text = styled.div<TextProps>`
  font-size: ${(props) => getFontSize(props.textStyle)}px;
  font-weight: ${(props) => getFontWeight(props.textStyle)};
  color: ${(props) => getFontColor(props.textColor)};
  white-space: pre-line;
  text-align: ${(props) => getAlign(props.align)};
  padding: 0 14px;
  margin-top: ${(props) => getMarginTop(props.textStyle)}px;
  margin-bottom: ${(props) => getMarginBottom(props.textStyle)}px;
`
