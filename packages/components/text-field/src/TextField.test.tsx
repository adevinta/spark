import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { TextField } from '.'

describe('TextField', () => {
  it('should render a label as children', () => {
    const label = 'Title'

    render(<TextField>{label}</TextField>)

    expect(screen.getByLabelText(label)).toBeVisible()
  })
})
