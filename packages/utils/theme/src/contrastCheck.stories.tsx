import { Icon } from '@spark-ui/icon'
import { Block } from '@spark-ui/icons/dist/icons/Block'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { Tabs } from '@spark-ui/tabs'
import { Tag } from '@spark-ui/tag'
import { Meta, StoryFn } from '@storybook/react'
import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

import { getThemeContrastReport } from './contrastCheck'
import { defaultTheme } from './defaultTheme'
import { defaultThemeDark } from './defaultThemeDark'
import { type Theme } from './types'

const meta: Meta = {
  title: 'Utils/theme-utils/contrast check',
}

export default meta

const ScoreTag = ({ score }: { score: string }) => {
  const isSuccess = score.includes('AA')

  return (
    <Tag design="tinted" intent={isSuccess ? 'success' : 'danger'}>
      {score}
      <Icon>{isSuccess ? <Check /> : <Block />}</Icon>
    </Tag>
  )
}

const Cell = ({ className, children }: { className?: string; children: ReactNode }) => {
  return <td className={cx('border-sm border-outline p-md', className)}>{children}</td>
}

const ThemeReport = ({ theme, ...rest }: { theme: Theme }) => {
  const report = getThemeContrastReport(theme)

  return (
    <table className="table-auto bg-surface text-on-surface" {...rest}>
      <thead className="sticky">
        <tr>
          <th className="p-sm text-left">Color</th>
          <th className="p-sm text-left">Preview</th>
          <th className="p-sm text-left">Ratio</th>
          <th className="p-sm text-left">Score (small text)</th>
          <th className="p-sm text-left">Score (large text)</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(report).map(([color, result]) => {
          return (
            <tr>
              <Cell>{color}</Cell>
              <Cell className={cx('border-current px-lg', result.previewStyles)}>
                <span className="text-body-1">small, </span>
                <span className="text-headline-1">large</span>
              </Cell>
              <Cell>{result.small.contrastRatio}</Cell>
              <Cell>
                <ScoreTag score={result.small.score} />
              </Cell>
              <Cell>
                <ScoreTag score={result.large.score} />
              </Cell>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export const Default: StoryFn = _args => (
  <div className="flex">
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">
          <span>Default theme</span>
        </Tabs.Trigger>
        <Tabs.Trigger value="tab2">
          <span>Dark theme</span>
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="tab1" data-theme="default">
        <ThemeReport theme={defaultTheme} />
      </Tabs.Content>
      <Tabs.Content value="tab2" data-theme="dark" className="bg-surface">
        <ThemeReport theme={defaultThemeDark} />
      </Tabs.Content>
    </Tabs>
  </div>
)
