/* External dependencies */
import React, { ReactElement } from 'react'

/* Internal dependencies */
import ContainerRefProvider from '../ContainerRefProvider'
import FormProvider from '../FormProvider'
import Snippet from '../Snippet'

interface InputValues {
  [id: string]: number | string
}

interface Item {
  id?: string
  type?: string
}

interface MainProps {
  className?: string
  submitting?: boolean
  onSubmit?: (values: InputValues, componentId: string) => void
  layout: Item[]
}

function Main({
  className,
  submitting,
  onSubmit,
  layout,
}: MainProps): ReactElement | null {
  return (
    <ContainerRefProvider
      className={className}
    >
      <FormProvider
        submitting={submitting}
        onSubmit={onSubmit}
      >
        <Snippet items={layout} />
      </FormProvider>
    </ContainerRefProvider>
  )
}

export default Main
