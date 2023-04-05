import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { Portal } from '.'

const meta: Meta<typeof Portal> = {
  title: 'Components/Portal',
  component: Portal,
}

export default meta

export const Usage: StoryFn = () => {
  const [portalContainer, setPortalContainer] = React.useState<HTMLDivElement | null>(null)

  return (
    <div className="gap-lg flex">
      <div className="h-sz-160 bg-primary-container p-lg text-on-primary-container w-1/2 rounded-md">
        <p>Element is located here in the JSX...</p>
        <Portal container={portalContainer}>
          <p className="bg-surface p-md hover:bg-surface-hovered rounded-sm text-current">
            This element is wrapped by Portal.
          </p>
        </Portal>
      </div>

      <div
        className=" h-sz-160 bg-secondary-container p-lg text-on-secondary-container w-1/2 rounded-md"
        ref={setPortalContainer}
      >
        <p>...but rendered here thanks to the Portal</p>
      </div>
    </div>
  )
}
