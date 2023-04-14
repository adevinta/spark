import type { TabsProps } from '@radix-ui/react-tabs'
import { createContext, type Dispatch, useContext } from 'react'

import { TabsTriggerVariantsProps } from './TabsTrigger.styles'

export type TabsContextInterface = TabsTriggerVariantsProps &
  Pick<TabsProps, 'orientation'> & {
    selectedTab?: string
    setSelectedTab: Dispatch<string>
  }

export const TabsContext = createContext<TabsContextInterface>({} as TabsContextInterface)

export const useTabsContext = () => {
  const context = useContext(TabsContext)

  if (!context) {
    throw Error('useTabsContext must be used within a TabsContext Provider')
  }

  return context
}
