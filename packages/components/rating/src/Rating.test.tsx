import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Rating } from './Rating'

describe('Rating', () => {
  it('should render', () => {
    render(<Rating value={1} />)

    expect(document.querySelector('[data-spark-component="rating"]')).toBeInTheDocument()
    expect(document.querySelectorAll('[data-part="star"]').length).toBe(5)
  })
})
