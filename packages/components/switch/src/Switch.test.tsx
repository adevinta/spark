/* eslint-disable max-nested-callbacks */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { Switch } from './Switch'

describe('Switch', () => {
  it('should be unchecked by default', () => {
    render(<Switch />)

    expect(screen.getByRole('switch')).not.toBeChecked()
  })

  it('should be checked by default when using `defaultChecked`', () => {
    render(<Switch defaultChecked />)

    expect(screen.getByRole('switch')).toBeChecked()
  })

  describe('user interactions', () => {
    it('should check/uncheck upon click', async () => {
      const user = userEvent.setup()

      render(<Switch />)

      await user.click(screen.getByRole('switch'))

      expect(screen.getByRole('switch')).toBeChecked()

      await user.click(screen.getByRole('switch'))

      expect(screen.getByRole('switch')).not.toBeChecked()
    })

    it('should not be interactive when disabled', async () => {
      const user = userEvent.setup()

      render(<Switch disabled />)

      await user.click(screen.getByRole('switch'))

      expect(screen.getByRole('switch')).not.toBeChecked()
    })

    it('should check/uncheck using the keyboard', async () => {
      const user = userEvent.setup()

      render(<Switch />)

      await user.keyboard('{Tab}') // pass focus to the Switch
      await user.keyboard('{Enter}') // Trigger the Switch

      expect(screen.getByRole('switch')).toBeChecked()

      await user.keyboard('{Enter}') // Trigger the Switch

      expect(screen.getByRole('switch')).not.toBeChecked()
    })
  })

  describe('controlled mode', () => {
    const ControlledSwitch = ({
      spyOnCheckedChange,
    }: {
      spyOnCheckedChange: (checked: boolean) => void
    }) => {
      const [isChecked, setIsChecked] = useState(false)

      const handleInteraction = (value: boolean): void => {
        spyOnCheckedChange(value)
        setIsChecked(value)
      }

      return (
        <div>
          <Switch checked={isChecked} onCheckedChange={handleInteraction} />
        </div>
      )
    }

    it('should trigger `onCheckedChange` on interaction', async () => {
      const spyOnCheckedChange = vi.fn()
      const user = userEvent.setup()

      render(<ControlledSwitch spyOnCheckedChange={spyOnCheckedChange} />)

      expect(spyOnCheckedChange).not.toHaveBeenCalled()
      expect(screen.getByRole('switch')).not.toBeChecked()

      await user.click(screen.getByRole('switch'))

      expect(spyOnCheckedChange).toHaveBeenCalledTimes(1)
      expect(screen.getByRole('switch')).toBeChecked()
    })
  })
})
