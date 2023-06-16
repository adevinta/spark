import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { TextField } from './TextField'

describe('TextField', () => {
  it('should render', () => {
    const label = 'label'

    render(<TextField label={label} />)

    expect(screen.getByLabelText(label)).toBeVisible()
  })
})
