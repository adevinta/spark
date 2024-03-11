/* eslint-disable complexity */
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { ArrowHorizontalDown } from '@spark-ui/icons/dist/icons/ArrowHorizontalDown'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { ComponentProps, forwardRef, type Ref } from 'react'

import { useComboboxContext } from './ComboboxContext'

interface DisclosureProps extends Omit<ComponentProps<typeof IconButton>, 'aria-label'> {
  className?: string
  closedLabel: string
  openedLabel: string
}

export const Disclosure = forwardRef(
  (
    {
      className,
      closedLabel,
      openedLabel,
      intent = 'neutral',
      design = 'ghost',
      size = 'sm',
      ...props
    }: DisclosureProps,
    forwardedRef: Ref<HTMLButtonElement>
  ) => {
    const ctx = useComboboxContext()

    const { ref: downshiftRef, ...downshiftDisclosureProps } = ctx.getToggleButtonProps({
      onClick: event => {
        event.stopPropagation()
      },
    })
    const isOpen = downshiftDisclosureProps['aria-expanded']
    const ref = useMergeRefs(forwardedRef, downshiftRef)

    return (
      <IconButton
        ref={ref}
        className={className}
        intent={intent}
        design={design}
        size={size}
        {...downshiftDisclosureProps}
        {...props}
        aria-label={isOpen ? openedLabel : closedLabel}
      >
        <Icon>
          <Icon className="shrink-0" size="sm">
            <ArrowHorizontalDown />
          </Icon>
        </Icon>
      </IconButton>
    )
  }
)

Disclosure.displayName = 'Combobox.Disclosure'
