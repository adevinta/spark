import React from 'react'
import { addons } from '@storybook/addons'
import { DARK_MODE_EVENT_NAME } from './constants'

/**
 * Returns the current state of storybook's dark-mode
 */
export function useDarkMode(): boolean {
  const canUseDOM = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )
  const [isDark, setIsDark] = React.useState()

  React.useEffect(() => {
    setIsDark(window.matchMedia('(prefers-color-scheme: dark)'))
  }, [canUseDOM])

  React.useEffect(() => {
    const chan = addons.getChannel()
    chan.on(DARK_MODE_EVENT_NAME, setIsDark)
    return () => chan.off(DARK_MODE_EVENT_NAME, setIsDark)
  }, [])

  return isDark
}

export * from './constants'
