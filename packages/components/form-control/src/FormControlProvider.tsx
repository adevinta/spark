import { ReactNode, useCallback, useMemo, useState } from 'react'

import { FormControlContext, FormControlContextState } from './FormControlContext'

export interface FormControlProviderProps
  extends Pick<FormControlContextState, 'id' | 'name' | 'isInvalid'> {
  children: ReactNode
}

export const FormControlProvider = ({
  id,
  name,
  isInvalid,
  children,
}: FormControlProviderProps) => {
  const [messageIds, setMessageIds] = useState<string[]>([])

  const handleMessageIdAdd = useCallback((id: string) => {
    setMessageIds(ids => [...ids, id])
  }, [])

  const handleMessageIdRemove = useCallback((id: string) => {
    setMessageIds(ids => ids.filter(current => current !== id))
  }, [])

  const value = useMemo(() => {
    const description = messageIds.join(' ')

    return {
      id,
      name,
      isInvalid,
      description,
      onMessageIdAdd: handleMessageIdAdd,
      onMessageIdRemove: handleMessageIdRemove,
    }
  }, [id, name, messageIds, isInvalid, handleMessageIdAdd, handleMessageIdRemove])

  return <FormControlContext.Provider value={value}>{children}</FormControlContext.Provider>
}

FormControlProvider.displayName = 'FormControlProvider'
