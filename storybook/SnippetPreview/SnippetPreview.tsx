/* External dependencies */
import React, { ReactNode, forwardRef, Ref } from 'react'

/* Internal dependencies */
import * as Styled from './SnippetPreview.styled'

interface SnippetPreviewProps {
  children: ReactNode,
}

function SnippetPreview(
  { children }: SnippetPreviewProps,
  ref?: Ref<HTMLDivElement>,
) {
  return (
    <>
      <Styled.GlobalStyle />
      <Styled.Wrapper>
        <Styled.Content ref={ref}>
          { children }
        </Styled.Content>
      </Styled.Wrapper>
    </>
  )
}

export default forwardRef(SnippetPreview)
