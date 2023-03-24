import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vitest } from 'vitest'

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

  it('should pass props to child component', async () => {
    const onClick = vitest.fn()

    render(
      <Slot onClick={onClick}>
        <button>Button</button>
      </Slot>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Button' }))

    await waitFor(() => expect(onClick).toBeCalled())
  })
})
