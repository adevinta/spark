import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Rating } from './Rating'

describe('Rating', () => {
  it('should render', () => {
    render(<Rating />)

    expect(screen.getByText(/rating/)).toBeInTheDocument()
  })
})
