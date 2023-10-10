import { Meta, StoryFn } from '@storybook/react'

import { Divider } from './index'

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
}

export default meta

export const Default: StoryFn = _args => <Divider />

export const Children: StoryFn = _args => (
  <>
    <Divider asChild>
      <h1 />
    </Divider>
    <Divider asChild>
      <h1>
        <Divider.Content>content</Divider.Content>
      </h1>
    </Divider>
  </>
)
export const Content: StoryFn = _args => (
  <Divider>
    <Divider.Content>Divider</Divider.Content>
  </Divider>
)

export const Alignment: StoryFn = _args => (
  <>
    <Divider />
    <Divider alignment="start">
      <Divider.Content>Divider</Divider.Content>
    </Divider>
    <Divider alignment="center">
      <Divider.Content>Divider</Divider.Content>
    </Divider>
    <Divider alignment="end">
      <Divider.Content>Divider</Divider.Content>
    </Divider>
  </>
)

export const Orientation: StoryFn = _args => (
  <>
    <Divider />
    <Divider orientation="horizontal" alignment="start">
      <Divider.Content>horizontal</Divider.Content>
    </Divider>
    <Divider orientation="horizontal" alignment="center">
      <Divider.Content>horizontal</Divider.Content>
    </Divider>
    <Divider orientation="horizontal" alignment="end">
      <Divider.Content>horizontal</Divider.Content>
    </Divider>
    <div className="flex h-sz-320 w-full">
      <Divider orientation="vertical" />
      <Divider orientation="vertical" alignment="start">
        <Divider.Content>vertical</Divider.Content>
      </Divider>
      <Divider orientation="vertical" alignment="center">
        <Divider.Content>vertical</Divider.Content>
      </Divider>
      <Divider orientation="vertical" alignment="end">
        <Divider.Content>vertical</Divider.Content>
      </Divider>
      <Divider orientation="vertical" />
    </div>
  </>
)

export const WrappedContent: StoryFn = _args => (
  <div className="flex flex-col">
    <Divider>
      <Divider.Content>Top</Divider.Content>
    </Divider>
    <div className="flex flex-row items-stretch justify-between">
      <Divider orientation="vertical">
        <Divider.Content className="rotate-180" style={{ writingMode: 'vertical-lr' }}>
          Left
        </Divider.Content>
      </Divider>
      <div className="flex grow items-center justify-center bg-main-container">wrapped content</div>
      <Divider orientation="vertical">
        <Divider.Content style={{ writingMode: 'vertical-lr' }}>Right</Divider.Content>
      </Divider>
    </div>
    <Divider>
      <Divider.Content className="rotate-180" style={{ writingMode: 'horizontal-tb' }}>
        Bottom
      </Divider.Content>
    </Divider>
  </div>
)

export const Card: StoryFn = _args => (
  <div className="flex w-full items-center justify-center bg-gradient-to-br from-main to-support-variant">
    <div className="m-3xl flex max-w-sz-320 flex-col rounded-md bg-background p-lg text-on-background shadow">
      <h1 className="text-headline-1">spark-ui components</h1>
      <p>An open-source UI component library.</p>
      <Divider />
      <div className="flex flex-row items-center justify-start ">
        <span>Blog</span>
        <Divider orientation="vertical" />
        <span>Docs</span>
        <Divider orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  </div>
)
