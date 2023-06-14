import { Meta, StoryFn } from '@storybook/react'
import { cva } from 'class-variance-authority'
import { ComponentProps, ComponentPropsWithoutRef, FC, PropsWithChildren, useState } from 'react'

import { FloatingLabel } from '.'

const meta: Meta<typeof FloatingLabel> = {
  title: 'Components/FloatingLabel',
  component: FloatingLabel,
}

export default meta

const ControlledFloatingLabel = ({
  id,
  isExpanded = false,
  isDisabled = false,
  children,
}: PropsWithChildren<{ id: string; isExpanded: boolean; isDisabled: boolean }>) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <div className="relative">
      <input
        type="text"
        id={id}
        className={cva('p-lg border-neutral active:border-primary border-sm rounded-sm', {
          variants: { isDisabled: { true: ['bg-on-surface/dim-5'] } },
        })({ isDisabled })}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={isDisabled}
      />

      <FloatingLabel htmlFor={id} isExpanded={isExpanded || isFocused} isDisabled={isDisabled}>
        {children}
      </FloatingLabel>
    </div>
  )
}

export const Default: StoryFn = _args => (
  <ControlledFloatingLabel id="first-name">First name</ControlledFloatingLabel>
)

export const Disabled: StoryFn = _args => (
  <ControlledFloatingLabel id="second-name" isDisabled isExpanded>
    Second name
  </ControlledFloatingLabel>
)
