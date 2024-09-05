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
    <Pagination
      count={100}
      pageSize={10}
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
              <Pagination.Item key={page.value} value={page.value} />
            ) : (
              <Pagination.Ellipsis key={`${index}-ellipsis`} index={index} />
            )
          )
        }
      </Pagination.Pages>
      <Pagination.NextTrigger />
    </Pagination>
  )
}

export const NoEllipsis: StoryFn = () => {
  return (
    <Pagination
      count={10}
      pageSize={1}
      length={5}
      noEllipsis
      translations={{
        rootLabel: 'Pagination',
        firstPageTriggerLabel: 'First page',
        prevTriggerLabel: 'Previous page',
        nextTriggerLabel: 'Next page',
        lastPageTriggerLabel: 'Last page',
        itemLabel: details =>
          details.page === details.totalPages
            ? `Last page, page ${details.page}`
            : `Page ${details.page}`,
      }}
    >
      <Pagination.FirstPageTrigger />
      <Pagination.PrevTrigger />
      <Pagination.Pages>
        {({ pages }) => {
          return pages.map(page =>
            page.type === 'page' ? (
              <Pagination.Item key={page.value} value={page.value}>
                {page.value}
              </Pagination.Item>
            ) : null
          )
        }}
      </Pagination.Pages>
      <Pagination.NextTrigger />
      <Pagination.LastPageTrigger />
    </Pagination>
  )
}

export const PaginationLength: StoryFn = () => {
  const [paginationLength, setPaginationLength] = useState(5)

  return (
    <div>
      <FormField name="email" className="mb-xl">
        <FormField.Label>Length:</FormField.Label>

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
        count={1000}
        pageSize={10}
        length={paginationLength}
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
                <Pagination.Item key={page.value} value={page.value}>
                  {page.value}
                </Pagination.Item>
              ) : (
                <Pagination.Ellipsis key={`${index}-ellipsis`} index={index} />
              )
            )
          }
        </Pagination.Pages>
        <Pagination.NextTrigger />
      </Pagination>
    </div>
  )
}

export const Controlled: StoryFn = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
      <Pagination
        count={100}
        pageSize={10}
        page={currentPage}
        onPageChange={details => setCurrentPage(details.page)}
      >
        <Pagination.PrevTrigger />
        <Pagination.Pages>
          {({ pages }) =>
            pages.map((page, index) =>
              page.type === 'page' ? (
                <Pagination.Item key={page.value} value={page.value}>
                  {page.value}
                </Pagination.Item>
              ) : (
                <Pagination.Ellipsis key={`${index}-ellipsis`} index={index} />
              )
            )
          }
        </Pagination.Pages>
        <Pagination.NextTrigger />
      </Pagination>
    </>
  )
}
