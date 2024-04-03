import { deepFind } from '@spark-ui/internal-utils'
import {
  createContext,
  type ReactElement,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface DialogContextState {
  isFullScreen: boolean
  setIsFullScreen: (value: boolean) => void
  hasCloseButton: boolean
}

const DialogContext = createContext<DialogContextState | null>(null)

export const DialogProvider = ({ children: childrenProp }: { children: ReactNode }) => {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [hasCloseButton, setHasCloseButton] = useState(false)

  const closeButton = deepFind(childrenProp, node => {
    const reactElementId = ((node as ReactElement)?.type as { id?: string })?.id

    return reactElementId === 'CloseButton'
  })

  useEffect(() => {
    setHasCloseButton(!!closeButton)
  }, [closeButton])

  return (
    <DialogContext.Provider
      value={{
        isFullScreen,
        setIsFullScreen,
        hasCloseButton,
      }}
    >
      {childrenProp}
    </DialogContext.Provider>
  )
}

export const useDialog = () => {
  const context = useContext(DialogContext)

  if (!context) {
    throw Error('useDialog must be used within a Dialog provider')
  }

  return context
}
