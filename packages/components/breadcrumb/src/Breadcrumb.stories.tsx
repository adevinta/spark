import { Meta, StoryFn } from '@storybook/react'

import { Breadcrumb } from '.'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Experimental/Breadcrumb',
  component: Breadcrumb,
}

export default meta

export const Default: StoryFn = _args => (
  <Breadcrumb aria-label="Breadcrumb">
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
    </Breadcrumb.Item>

    <Breadcrumb.Separator />

    <Breadcrumb.Item>
      <Breadcrumb.Link href="/docs/components">Components</Breadcrumb.Link>
    </Breadcrumb.Item>

    <Breadcrumb.Separator />

    <Breadcrumb.Item>
      <Breadcrumb.CurrentPage>Breadcrumb</Breadcrumb.CurrentPage>
    </Breadcrumb.Item>
  </Breadcrumb>
)
