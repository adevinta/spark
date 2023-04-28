import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Badge } from './Badge'

describe('Badge', () => {
  it('should render', () => {
    render(<Badge>Hello World!</Badge>)

    expect(screen.getByText('Hello World!')).toBeInTheDocument()
  })
})
