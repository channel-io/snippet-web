/* External dependencies */
import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  PropsWithChildren,
} from 'react'

/* Internal dependencies */
import FormContext from '../../contexts/FormContext'

interface InputValues {
  [id: string]: number | string,
}

export interface FormProviderProps {
  submitting?: boolean,
  onSubmit?: (values: InputValues, componentId: string) => void,
}

function FormProvider({
  submitting = false,
  onSubmit,
  children,
}: PropsWithChildren<FormProviderProps>) {
  const [values, setValues] = useState<InputValues>({})
  const valuesRef = useRef(values)

  const updateValues = useCallback((inputValues) => {
    valuesRef.current = inputValues
    setValues(inputValues)
  }, [])

  const updateInput = useCallback((id: string, value: string | number) => {
    updateValues({
      ...valuesRef.current,
      [id]: value,
    })
  }, [updateValues])

  const removeInput = useCallback((id: string) => {
    if (valuesRef.current[id]) {
      delete valuesRef.current[id]
    }
    updateValues({ ...valuesRef.current })
  }, [updateValues])

  const submit = useCallback((componentId: string) => {
    if (onSubmit) {
      onSubmit(valuesRef.current, componentId)
    }
  }, [onSubmit])

  const value = useMemo(() => ({
    values,
    updateInput,
    removeInput,
    submit,
    submitting,
  }), [values, updateInput, removeInput, submit, submitting])

  return (
    <FormContext.Provider value={value}>
      { children }
    </FormContext.Provider>
  )
}

export default FormProvider
