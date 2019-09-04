/* External dependencies */
import React from 'react'

/* Internal dependencies */
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
  submitting?: boolean,
  onSubmit?: (values: InputValues, componentId: string) => void,
  items: Item[],
}

function Main({
  submitting,
  onSubmit,
  items,
}: MainProps) {
  return (
    <FormProvider
      submitting={submitting}
      onSubmit={onSubmit}
    >
      <Snippet items={items} />
    </FormProvider>
  )
}

export default Main
