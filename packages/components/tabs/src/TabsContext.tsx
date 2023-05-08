import type { TabsProps } from '@radix-ui/react-tabs'
import { createContext, useContext } from 'react'

import type { TabsTriggerVariantsProps } from './TabsTrigger.styles'

export type TabsContextInterface = TabsTriggerVariantsProps & Pick<TabsProps, 'orientation'>

export const TabsContext = createContext<TabsContextInterface>({} as TabsContextInterface)

export const useTabsContext = () => {
  const context = useContext(TabsContext)

  if (!context) {
    throw Error('useTabsContext must be used within a TabsContext Provider')
  }

  return context
}
