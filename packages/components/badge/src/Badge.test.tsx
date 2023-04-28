import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Badge } from './Badge'

describe('Badge', () => {
  it('should render', () => {
    render(<Badge>Hello World!</Badge>)

    expect(screen.getByText('Hello World!')).toBeInTheDocument()
  })
})
