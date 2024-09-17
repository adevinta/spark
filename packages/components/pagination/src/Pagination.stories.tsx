import { FormField } from '@spark-ui/form-field'
import { RadioGroup } from '@spark-ui/radio-group'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Pagination } from '.'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
}

export default meta

export const Default: StoryFn = () => {
  return (
    <Pagination type="button" aria-label="Pagination" count={100} pageSize={10}>
      <Pagination.PrevTrigger aria-label="Previous page" />
      <Pagination.Pages>
        {({ pages, totalPages }) =>
          pages.map((page, index) =>
            page.type === 'page' ? (
              <Pagination.Item
                key={page.value}
                value={page.value}
                aria-label={
                  page.value === totalPages ? `Last page, page ${page.value}` : `Page ${page.value}`
                }
              />
            ) : (
              <Pagination.Ellipsis key={`${index}-ellipsis`} index={index} />
            )
          )
        }
      </Pagination.Pages>
      <Pagination.NextTrigger aria-label="Next page" />
    </Pagination>
  )
}

export const NoEllipsis: StoryFn = () => {
  return (
    <Pagination type="button" aria-label="Pagination" count={10} pageSize={1} length={5} noEllipsis>
      <Pagination.FirstPageTrigger aria-label="First page" />
      <Pagination.PrevTrigger aria-label="Previous page" />
      <Pagination.Pages>
        {({ pages, totalPages }) => {
          return pages.map(page =>
            page.type === 'page' ? (
              <Pagination.Item
                key={page.value}
                value={page.value}
                aria-label={
                  page.value === totalPages ? `Last page, page ${page.value}` : `Page ${page.value}`
                }
              >
                {page.value}
              </Pagination.Item>
            ) : null
          )
        }}
      </Pagination.Pages>
      <Pagination.NextTrigger aria-label="Next page" />
      <Pagination.LastPageTrigger aria-label="Last page" />
    </Pagination>
  )
}

export const PaginationLength: StoryFn = () => {
  const [paginationLength, setPaginationLength] = useState(5)

  return (
    <div>
      <FormField name="email" className="mb-xl">
        <FormField.Label>Length (these are just example value, you can go above):</FormField.Label>

        <RadioGroup
          value={`${paginationLength}`}
          onValueChange={v => setPaginationLength(+v)}
          orientation="horizontal"
        >
          <RadioGroup.Radio value="5">5</RadioGroup.Radio>
          <RadioGroup.Radio value="7">7</RadioGroup.Radio>
          <RadioGroup.Radio value="9">9</RadioGroup.Radio>
        </RadioGroup>
      </FormField>

      <Pagination
        type="button"
        aria-label="Pagination"
        count={1000}
        pageSize={10}
        length={paginationLength}
      >
        <Pagination.PrevTrigger aria-label="Previous page" />
        <Pagination.Pages>
          {({ pages, totalPages }) =>
            pages.map((page, index) =>
              page.type === 'page' ? (
                <Pagination.Item
                  key={page.value}
                  value={page.value}
                  aria-label={
                    page.value === totalPages
                      ? `Last page, page ${page.value}`
                      : `Page ${page.value}`
                  }
                >
                  {page.value}
                </Pagination.Item>
              ) : (
                <Pagination.Ellipsis key={`${index}-ellipsis`} index={index} />
              )
            )
          }
        </Pagination.Pages>
        <Pagination.NextTrigger aria-label="Next page" />
      </Pagination>
    </div>
  )
}

export const Controlled: StoryFn = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [items] = useState(
    Array.from({ length: 48 }, (_, i) => ({
      id: i + 1,
      name: `Article ${i + 1}`,
    }))
  )

  const pageSize = 5

  const currentPageItems = items.slice(
    (currentPage - 1) * pageSize,
    (currentPage - 1) * pageSize + pageSize
  )

  return (
    <div className="flex flex-col items-center justify-center gap-xl">
      <div className="flex w-full flex-col gap-md">
        {currentPageItems.map(item => {
          return (
            <div key={item.id} className="bg-basic-container p-lg">
              <p>{item.name}</p>
            </div>
          )
        })}
      </div>
      <Pagination
        type="button"
        aria-label="Pagination"
        count={items.length}
        pageSize={pageSize}
        page={currentPage}
        onPageChange={details => {
          setCurrentPage(details.page)
        }}
      >
        <Pagination.PrevTrigger aria-label="Previous page" />
        <Pagination.Pages>
          {({ pages, totalPages }) =>
            pages.map((page, index) =>
              page.type === 'page' ? (
                <Pagination.Item
                  key={page.value}
                  value={page.value}
                  aria-label={
                    page.value === totalPages
                      ? `Last page, page ${page.value}`
                      : `Page ${page.value}`
                  }
                >
                  {page.value}
                </Pagination.Item>
              ) : (
                <Pagination.Ellipsis key={`${index}-ellipsis`} index={index} />
              )
            )
          }
        </Pagination.Pages>
        <Pagination.NextTrigger aria-label="Next page" />
      </Pagination>
    </div>
  )
}
