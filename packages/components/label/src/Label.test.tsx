import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Label } from './Label'

describe('Label', () => {
  it('should render applying correct labelling when wrapping controls', () => {
    render(
      <Label>
        Name <input type="text" name="name" />
      </Label>
    )

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
  })

  it('should render applying correct labelling when not wrapping controls ', () => {
    render(
      <>
        <Label htmlFor="id">Name</Label>
        <input id="id" type="text" name="name" />
      </>
    )

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
  })
})
