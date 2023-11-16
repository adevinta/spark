import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Combobox } from './Combobox'

describe('Combobox', () => {
  it('should render', () => {
    render(<Combobox />)

    expect(screen.getByText(/combobox/)).toBeInTheDocument()
  })
})
