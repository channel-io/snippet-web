/* External dependencies */
import React, { ReactElement } from 'react'

/* Internal dependencies */
import ContainerRefProvider from 'Containers/ContainerRefProvider'
import FormProvider from 'Containers/FormProvider'
import Snippet from 'Containers/Snippet'

interface InputValues {
  [id: string]: number | string,
}

interface Item {
  id?: string,
  type?: string,
}

interface MainProps {
  className?: string,
  submitting?: boolean,
  onSubmit?: (values: InputValues, componentId: string) => void,
  layout: Item[],
  version?: string,
}

function Main({
  className,
  submitting,
  onSubmit,
  layout,
  version,
}: MainProps): ReactElement | null {
  if (version !== 'v0') return null

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
