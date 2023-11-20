import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Select } from './'

describe('Select', () => {
  it('should render', () => {
    render(<Select />)

    expect(screen.getByText(/select/)).toBeInTheDocument()
  })
})
