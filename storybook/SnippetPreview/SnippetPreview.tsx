/* External dependencies */
import React, { ReactNode } from 'react'

/* Internal dependencies */
import * as Styled from './SnippetPreview.styled'

interface SnippetPreviewProps {
  children: ReactNode,
}

function SnippetPreview({ children }: SnippetPreviewProps) {
  return (
    <>
      <Styled.GlobalStyle />
      <Styled.Wrapper>
        <Styled.Content>
          { children }
        </Styled.Content>
      </Styled.Wrapper>
    </>
  )
}

export default SnippetPreview
