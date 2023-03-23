import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Slot } from './Slot'

describe('Slot', () => {
  it('should render wrapped component', () => {
    render(
      <Slot>
        <button>Link</button>
      </Slot>
    )

    expect(screen.getByRole('button', { name: 'Link' })).toBeInTheDocument()
  })

  it('should pass props to child component', () => {
    render(
      <Slot href="/home">
        <a>Link</a>
      </Slot>
    )

    expect(screen.getByRole('link', { name: 'Link' })).toHaveAttribute('href', '/home')
  })
})
