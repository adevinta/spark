import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { Pagination } from '.'

describe('Pagination', () => {
  it('Should render pagination', async () => {
    const user = userEvent.setup()

    // Given a pagination with 10 pages of 10 item items each, and a sibling count display of 1
    render(
      <Pagination
        count={100}
        pageSize={10}
        length={7}
        translations={{
          rootLabel: 'Pagination',
          prevTriggerLabel: 'Previous page',
          nextTriggerLabel: 'Next page',
          itemLabel: details =>
            details.page === details.totalPages
              ? `Last page, page ${details.page}`
              : `Page ${details.page}`,
        }}
      >
        <Pagination.PrevTrigger />
        <Pagination.Pages>
          {({ pages }) =>
            pages.map((page, index) =>
              page.type === 'page' ? (
                <Pagination.Item key={index} value={page.value}>
                  {page.value}
                </Pagination.Item>
              ) : (
                <Pagination.Ellipsis key={index} index={index} />
              )
            )
          }
        </Pagination.Pages>
        <Pagination.NextTrigger />
      </Pagination>
    )

    // The pages 6 to 9 are not visible (ellipsis) and "previous page" button is disabled
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Page 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 2' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 3' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 4' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 5' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 6' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 7' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 8' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 9' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Last page, page 10' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next page' })).not.toBeDisabled()

    // When I click on page 5 (of 10)
    await user.click(screen.getByRole('button', { name: 'Page 5' }))

    // Then pages 2 to 3 and 7 to 9 are not visible (ellipsis), direct sibling of page 5 are visible (page 4 and page 6)
    expect(screen.getByRole('button', { name: 'Previous page' })).not.toBeDisabled()
    expect(screen.getByRole('button', { name: 'Page 1' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 2' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 3' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 4' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 5' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 6' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 7' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 8' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 9' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Last page, page 10' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next page' })).not.toBeDisabled()

    // When I click on the last page (10 out of 10)
    await user.click(screen.getByRole('button', { name: 'Last page, page 10' }))

    // Then pages 2 to 5 are not visible (ellipsis) and "next page" button is disabled
    expect(screen.getByRole('button', { name: 'Previous page' })).not.toBeDisabled()
    expect(screen.getByRole('button', { name: 'Page 1' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 2' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 3' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 4' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 5' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 6' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 7' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 8' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 9' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Last page, page 10' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled()
  })

  it('Should render pagination (no ellipsis)', async () => {
    const user = userEvent.setup()

    // Given a pagination with 10 pages of 10 item items each, and a sibling count display of 1
    render(
      <Pagination
        count={100}
        pageSize={10}
        length={5}
        noEllipsis
        translations={{
          rootLabel: 'Pagination',
          prevTriggerLabel: 'Previous page',
          nextTriggerLabel: 'Next page',
          itemLabel: details =>
            details.page === details.totalPages
              ? `Last page, page ${details.page}`
              : `Page ${details.page}`,
        }}
      >
        <Pagination.PrevTrigger />
        <Pagination.Pages>
          {({ pages }) =>
            pages.map((page, index) =>
              page.type === 'page' ? (
                <Pagination.Item key={index} value={page.value}>
                  {page.value}
                </Pagination.Item>
              ) : (
                <Pagination.Ellipsis key={index} index={index} />
              )
            )
          }
        </Pagination.Pages>
        <Pagination.NextTrigger />
      </Pagination>
    )

    // The pages above 5 are not visible and "previous page" button is disabled
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Page 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 2' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 3' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 4' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 5' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 6' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 7' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 8' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 9' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Last page, page 10' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next page' })).not.toBeDisabled()

    // When I click on page 5 (of 10)
    await user.click(screen.getByRole('button', { name: 'Page 5' }))

    // Then pages 3 to 7 are visible and both "next" and "prev" buttons are enabled
    expect(screen.getByRole('button', { name: 'Previous page' })).not.toBeDisabled()
    expect(screen.queryByRole('button', { name: 'Page 1' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 2' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 3' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 4' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 5' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 6' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 7' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 8' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 9' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Last page, page 10' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next page' })).not.toBeDisabled()

    // When I click on the last visible page until I reach page 10 (last page)
    await user.click(screen.getByRole('button', { name: 'Page 7' }))
    await user.click(screen.getByRole('button', { name: 'Page 9' }))
    await user.click(screen.getByRole('button', { name: 'Last page, page 10' }))

    // Then pages 2 to 5 are not visible (ellipsis) and "next page" button is disabled
    expect(screen.getByRole('button', { name: 'Previous page' })).not.toBeDisabled()
    expect(screen.queryByRole('button', { name: 'Page 1' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 2' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 3' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 4' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Page 5' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 6' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 7' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 8' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 9' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Last page, page 10' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled()
  })
})
