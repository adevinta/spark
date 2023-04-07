import { createContext, useContext } from 'react'

import { TabsTriggerVariantsProps } from './Tabs.styles'

export type TabsContextInterface = TabsTriggerVariantsProps

export const TabsContext = createContext<TabsContextInterface>({})

export const useTabsContext = () => {
  const context = useContext(TabsContext)

  if (!context) {
    throw Error('useTabsContext must be used within a TabsContext Provider')
  }

  return context
}
