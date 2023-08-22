import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Progress } from './Progress'

describe('Progress', () => {
  it('should render', () => {
    render(<Progress value={50} aria-label="Progress" />)

    expect(screen.getByRole('progressbar', { name: 'Progress' })).toBeInTheDocument()
  })
})
