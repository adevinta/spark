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
  const [labelId, setLabelId] = useState<string>('')
  const [messageIds, setMessageIds] = useState<string[]>([])
  const description = messageIds.length > 0 ? messageIds.join(' ') : undefined

  const handleMessageIdAdd = useCallback((id: string) => {
    setMessageIds(ids => [...ids, id])
  }, [])

  const handleMessageIdRemove = useCallback((id: string) => {
    setMessageIds(ids => ids.filter(current => current !== id))
  }, [])

  const handleLabelIdAdd = useCallback((id: string) => {
    setLabelId(id)
  }, [])

  const handleLabelIdRemove = useCallback(() => {
    setLabelId('')
  }, [])

  const value = useMemo(() => {
    return {
      id,
      labelId,
      name,
      isInvalid,
      isRequired,
      description,
      onMessageIdAdd: handleMessageIdAdd,
      onMessageIdRemove: handleMessageIdRemove,
      onLabelIdAdd: handleLabelIdAdd,
      onLabelIdRemove: handleLabelIdRemove,
    }
  }, [
    id,
    labelId,
    name,
    description,
    isInvalid,
    isRequired,
    handleMessageIdAdd,
    handleMessageIdRemove,
    handleLabelIdAdd,
    handleLabelIdRemove,
  ])

  return <FormControlContext.Provider value={value}>{children}</FormControlContext.Provider>
}

FormControlProvider.displayName = 'FormControlProvider'
