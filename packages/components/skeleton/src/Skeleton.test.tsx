import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Skeleton } from '.'

describe('Skeleton', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.spyOn(console, 'error')
  })

  it('should render skeleton with children components', () => {
    const { container } = render(
      <Skeleton label="Loading...">
        <Skeleton.Rectangle width="100%" height={128} />
        <Skeleton.Circle size={64} />
        <Skeleton.Line />
      </Skeleton>
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()

    expect(container.querySelectorAll('[data-part="rectangle"]')).toHaveLength(1)
    expect(container.querySelectorAll('[data-part="circle"]')).toHaveLength(1)
    expect(container.querySelectorAll('[data-part="line"]')).toHaveLength(1)
  })

  it('should render with children', () => {
    const { container, rerender } = render(
      <Skeleton label="Loading...">
        <Skeleton.Rectangle width="100%" height={128}>
          <img src="https://placehold.co/600/128" alt="Rectangular image" />
        </Skeleton.Rectangle>

        <Skeleton.Circle size={64} asChild>
          <img src="https://placehold.co/64" alt="Circular image" />
        </Skeleton.Circle>
      </Skeleton>
    )

    expect(container.querySelector('[data-part="rectangle"]')).toBeInTheDocument()
    expect(container.querySelector('[data-part="circle"]')).toBeInTheDocument()

    expect(screen.queryByAltText('Rectangular image')).not.toBeInTheDocument()
    expect(screen.queryByAltText('Circular image')).not.toBeInTheDocument()

    rerender(
      <Skeleton label="Loading..." isLoading={false}>
        <Skeleton.Rectangle width="100%" height={128}>
          <img src="https://placehold.co/600/128" alt="Rectangular image" />
        </Skeleton.Rectangle>

        <Skeleton.Circle size={64} data-shape="circle" asChild>
          <img src="https://placehold.co/64" alt="Circular image" />
        </Skeleton.Circle>
      </Skeleton>
    )

    expect(container.querySelector('[data-part="rectangle"]')).not.toBeInTheDocument()
    expect(container.querySelector('[data-part="circle"]')).not.toBeInTheDocument()

    expect(screen.getByAltText('Rectangular image')).toBeInTheDocument()
    expect(screen.getByAltText('Circular image')).toHaveAttribute('data-shape', 'circle')
  })

  it('should log an error in browser console if loading state is not used with children prop', () => {
    render(
      <Skeleton label="Loading..." isLoading={false}>
        <Skeleton.Rectangle width="100%" height={128} />
      </Skeleton>
    )

    expect(console.error).toHaveBeenCalledWith(
      'Children content must be declared when using Skeleton loading state'
    )
  })

  it('should remove visually hidden label when content is loaded', () => {
    render(
      <Skeleton label="Loading..." isLoading={false}>
        <Skeleton.Rectangle width="100%" height={128}>
          <img src="https://placehold.co/600/128" alt="Rectangular image" />
        </Skeleton.Rectangle>
      </Skeleton>
    )

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })

  it('should render with as much lines as specified', () => {
    const { container } = render(
      <Skeleton>
        <Skeleton.Line lines={5} />
      </Skeleton>
    )

    expect(container.querySelectorAll('[data-part="line"]')).toHaveLength(5)
  })

  it('should not be reachable on keyboard navigation', async () => {
    const user = userEvent.setup()

    render(
      <div>
        <button type="button">Previous button</button>
        <Skeleton>
          <Skeleton.Rectangle height={128} />
        </Skeleton>
        <button type="button">Next button</button>
      </div>
    )

    await user.tab()
    expect(screen.getByText('Previous button')).toHaveFocus()

    await user.tab()

    expect(document.querySelector('[data-spark-component="skeleton"]')).not.toHaveFocus()
    expect(screen.getByText('Next button')).toHaveFocus()
  })
})
