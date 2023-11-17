import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Dropdown } from './Dropdown'

describe('Dropdown', () => {
  it('should render', () => {
    render(<Dropdown />)

    expect(screen.getByText(/dropdown/)).toBeInTheDocument()
  })
})
