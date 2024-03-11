import { Popover } from '@spark-ui/popover'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import React, { forwardRef, Fragment, ReactNode, type Ref } from 'react'

import { useComboboxContext } from './ComboboxContext'
import { styles } from './ComboboxTrigger.styles'
import { findElement } from './utils'

interface TriggerProps {
  className?: string
  children: ReactNode
}

export const Trigger = forwardRef(
  ({ className, children }: TriggerProps, forwardedRef: Ref<HTMLDivElement>) => {
    const ctx = useComboboxContext()

    // Trigger compound elements
    const leadingIcon = findElement(children, 'Combobox.LeadingIcon')
    const selectedItems = findElement(children, 'Combobox.SelectedItems')
    const input = findElement(children, 'Combobox.Input')
    const clearButton = findElement(children, 'Combobox.ClearButton')
    const disclosure = findElement(children, 'Combobox.Disclosure')

    const [PopoverAnchor, popoverAnchorProps] = ctx.hasPopover
      ? [Popover.Anchor, { asChild: true, type: undefined }]
      : [Fragment, {}]

    const ref = useMergeRefs(forwardedRef, ctx.triggerAreaRef)

    return (
      <>
        <PopoverAnchor {...popoverAnchorProps}>
          <div
            ref={ref}
            className={styles({
              className,
              state: ctx.state,
              disabled: ctx.disabled,
              readOnly: ctx.readOnly,
            })}
            onClick={() => {
              if (!ctx.isOpen) {
                ctx.openMenu()
                if (ctx.innerInputRef.current) {
                  ctx.innerInputRef.current.focus()
                }
              }
            }}
          >
            {leadingIcon}
            <div className="inline-flex grow flex-wrap items-center gap-sm py-sm">
              {selectedItems}
              {input}
            </div>
            {clearButton}
            {disclosure}
          </div>
        </PopoverAnchor>
      </>
    )
  }
)

Trigger.displayName = 'Combobox.Trigger'
