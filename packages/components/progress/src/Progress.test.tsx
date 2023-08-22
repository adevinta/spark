import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Progress } from '.'

describe('Progress', () => {
  it('should render', () => {
    render(
      <Progress value={50} aria-label="Progress">
        <Progress.Bar />
      </Progress>
    )

    expect(screen.getByRole('progressbar', { name: 'Progress' })).toBeInTheDocument()
  })

  it('should render using a label', () => {
    render(
      <Progress value={50}>
        <Progress.Label>Progress</Progress.Label>
        <Progress.Bar />
      </Progress>
    )

    expect(screen.getByRole('progressbar', { name: 'Progress' })).toBeInTheDocument()
  })
})
