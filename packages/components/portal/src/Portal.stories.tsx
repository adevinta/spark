import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { Portal } from '.'

const meta: Meta<typeof Portal> = {
  title: 'Components/Portal',
  component: Portal,
  tags: ['others'],
}

export default meta

export const Usage: StoryFn = () => {
  const [portalContainer, setPortalContainer] = React.useState<HTMLDivElement | null>(null)

  return (
    <div className="flex gap-lg">
      <div className="h-sz-160 w-1/2 rounded-md bg-main-container p-lg text-on-main-container">
        <p>Element is located here in the JSX...</p>
        <Portal container={portalContainer}>
          <p className="rounded-sm bg-surface p-md text-current hover:bg-surface-hovered">
            This element is wrapped by Portal.
          </p>
        </Portal>
      </div>

      <div
        className="h-sz-160 w-1/2 rounded-md bg-support-container p-lg text-on-support-container"
        ref={setPortalContainer}
      >
        <p>...but rendered here thanks to the Portal</p>
      </div>
    </div>
  )
}
