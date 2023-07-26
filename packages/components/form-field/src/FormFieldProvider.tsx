import { useId } from '@radix-ui/react-id'
import { ReactNode, useCallback, useMemo, useState } from 'react'

import { FormFieldContext, FormFieldContextState } from './FormFieldContext'

export interface FormFieldProviderProps
  extends Pick<FormFieldContextState, 'id' | 'name' | 'disabled' | 'state' | 'isRequired'> {
  children: ReactNode
}

export const FormFieldProvider = ({
  id,
  name,
  disabled = false,
  state,
  isRequired,
  children,
}: FormFieldProviderProps) => {
  const labelId = useId()
  const [messageIds, setMessageIds] = useState<string[]>([])
  const description = messageIds.length > 0 ? messageIds.join(' ') : undefined

  const handleMessageIdAdd = useCallback((msgId: string) => {
    setMessageIds(ids => [...ids, msgId])
  }, [])

  const handleMessageIdRemove = useCallback((msgId: string) => {
    setMessageIds(ids => ids.filter(current => current !== msgId))
  }, [])

  const value = useMemo(() => {
    const isInvalid = state === 'error'

    return {
      id,
      labelId,
      name,
      disabled,
      state,
      isRequired,
      isInvalid,
      description,
      onMessageIdAdd: handleMessageIdAdd,
      onMessageIdRemove: handleMessageIdRemove,
    }
  }, [
    id,
    labelId,
    name,
    disabled,
    description,
    state,
    isRequired,
    handleMessageIdAdd,
    handleMessageIdRemove,
  ])

  return <FormFieldContext.Provider value={value}>{children}</FormFieldContext.Provider>
}

FormFieldProvider.displayName = 'FormFieldProvider'
