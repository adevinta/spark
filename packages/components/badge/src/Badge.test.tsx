import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Badge } from './Badge'

describe('Badge', () => {
  it('should render', () => {
    render(<Badge />)

    expect(document.querySelector('[data-spark-component="badge"]')).toBeInTheDocument()
  })

  it('should be empty by default', () => {
    render(<Badge />)

    expect(document.querySelector('[data-spark-component="badge"]')).toBeEmptyDOMElement()
  })

  it('should has DOM content when passing a children', () => {
    render(<Badge>Hello World!</Badge>)

    const helloWorldContent = (content: string, element: Element | null) => {
      return element?.tagName.toLowerCase() === 'div' && content.startsWith('Hello World!')
    }
    const childrenWithText = screen.getByText(helloWorldContent)

    expect(childrenWithText).toBeInTheDocument()
  })

  it('should print properly the label when there is no count', () => {
    render(<Badge />)

    expect(screen.getByLabelText('New notification')).toBeInTheDocument()
  })

  it('should print properly the label when count is 1', () => {
    render(<Badge count={1} />)

    expect(screen.getByLabelText('1 notification')).toBeInTheDocument()
  })

  it('should print properly the label when count is 99', () => {
    render(<Badge count={99} />)

    expect(screen.getByLabelText('99 notifications')).toBeInTheDocument()
  })

  it('should print properly the label when count is 100', () => {
    render(<Badge count={100} />)

    expect(screen.getByLabelText('More than 99 notifications')).toBeInTheDocument()
  })
})
