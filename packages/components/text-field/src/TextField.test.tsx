import { FormField } from '@spark-ui/form-field'
import { Icon } from '@spark-ui/icon'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { TextField } from '.'

describe('TextField', () => {
  it('should render a label as children', () => {
    const label = 'Title'

    render(<TextField>{label}</TextField>)

    expect(screen.getByLabelText(label)).toBeVisible()
  })
})
