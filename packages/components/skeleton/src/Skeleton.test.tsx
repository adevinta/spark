import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Skeleton } from '.'

describe('Skeleton', () => {
  it('should render skeleton with children components', () => {
    const { container } = render(
      <Skeleton>
        <Skeleton.Rectangle width="100%" height={128} />
        <Skeleton.Circle size={64} />
        <Skeleton.Line />
      </Skeleton>
    )

    expect(document.querySelector('[data-spark-component="skeleton"]')).toBeInTheDocument()

    expect(container.querySelectorAll('[data-part="rectangle"]')).toHaveLength(1)
    expect(container.querySelectorAll('[data-part="circle"]')).toHaveLength(1)
    expect(container.querySelectorAll('[data-part="line"]')).toHaveLength(1)
  })

  it('should render with as much lines as specified', () => {
    const { container } = render(
      <Skeleton>
        <Skeleton.Line lines={5} />
      </Skeleton>
    )

    expect(container.querySelectorAll('[data-part="line"]')).toHaveLength(5)
  })
})
