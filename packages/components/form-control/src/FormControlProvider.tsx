import { ReactNode, useCallback, useMemo, useState } from 'react'

import { FormControlContext, FormControlContextState } from './FormControlContext'

export interface FormControlProviderProps
  extends Pick<FormControlContextState, 'id' | 'name' | 'isInvalid' | 'isRequired'> {
  children: ReactNode
}

export const FormControlProvider = ({
  id,
  name,
  isInvalid,
  isRequired,
  children,
}: FormControlProviderProps) => {
  const [messageIds, setMessageIds] = useState<string[]>([])
  const description = messageIds.length > 0 ? messageIds.join(' ') : undefined

  const handleMessageIdAdd = useCallback((id: string) => {
    setMessageIds(ids => [...ids, id])
  }, [])

  const handleMessageIdRemove = useCallback((id: string) => {
    setMessageIds(ids => ids.filter(current => current !== id))
  }, [])

  const value = useMemo(() => {
    return {
      id,
      name,
      isInvalid,
      isRequired,
      description,
      onMessageIdAdd: handleMessageIdAdd,
      onMessageIdRemove: handleMessageIdRemove,
    }
  }, [id, name, description, isInvalid, isRequired, handleMessageIdAdd, handleMessageIdRemove])

  return <FormControlContext.Provider value={value}>{children}</FormControlContext.Provider>
}

FormControlProvider.displayName = 'FormControlProvider'
