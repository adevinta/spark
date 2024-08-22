import { Icon } from '@spark-ui/icon'
import { ArrowRight } from '@spark-ui/icons/dist/icons/ArrowRight'
import { Meta, StoryFn } from '@storybook/react'

import { Breadcrumb } from '.'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
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
      <Breadcrumb.Link href="/?path=/docs/experimental-breadcrumb--docs">
        Components
      </Breadcrumb.Link>
    </Breadcrumb.Item>

    <Breadcrumb.Separator />

    <Breadcrumb.Item>
      <Breadcrumb.CurrentPage>Breadcrumb</Breadcrumb.CurrentPage>
    </Breadcrumb.Item>
  </Breadcrumb>
)

export const CustomSeparator: StoryFn = _args => (
  <Breadcrumb aria-label="Breadcrumb">
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
    </Breadcrumb.Item>

    <Breadcrumb.Separator>
      <Icon>
        <ArrowRight />
      </Icon>
    </Breadcrumb.Separator>

    <Breadcrumb.Item>
      <Breadcrumb.Link href="/?path=/docs/experimental-breadcrumb--docs">
        Components
      </Breadcrumb.Link>
    </Breadcrumb.Item>

    <Breadcrumb.Separator>
      <Icon>
        <ArrowRight />
      </Icon>
    </Breadcrumb.Separator>

    <Breadcrumb.Item>
      <Breadcrumb.CurrentPage>Breadcrumb</Breadcrumb.CurrentPage>
    </Breadcrumb.Item>
  </Breadcrumb>
)

export const Truncate: StoryFn = _args => (
  <Breadcrumb aria-label="Breadcrumb">
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
    </Breadcrumb.Item>

    <Breadcrumb.Separator />

    <Breadcrumb.Item>
      <Breadcrumb.Link href="/?path=/docs/experimental-breadcrumb--docs" className="max-w-[100px]">
        Components list - Feel free to use them
      </Breadcrumb.Link>
    </Breadcrumb.Item>

    <Breadcrumb.Separator />

    <Breadcrumb.Item>
      <Breadcrumb.CurrentPage>Breadcrumb</Breadcrumb.CurrentPage>
    </Breadcrumb.Item>
  </Breadcrumb>
)
