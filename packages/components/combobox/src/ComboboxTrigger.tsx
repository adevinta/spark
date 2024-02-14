/* eslint-disable complexity */
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { ArrowHorizontalDown } from '@spark-ui/icons/dist/icons/ArrowHorizontalDown'
import { Popover } from '@spark-ui/popover'
import { forwardRef, Fragment, ReactNode, type Ref } from 'react'

import { useComboboxContext } from './ComboboxContext'
import { LeadingIcon } from './ComboboxLeadingIcon'
import { styles } from './ComboboxTrigger.styles'

interface TriggerProps {
  className?: string
  children?: ReactNode
}

export const Trigger = forwardRef(
  ({ className, children }: TriggerProps, forwardedRef: Ref<HTMLDivElement>) => {
    const { getToggleButtonProps, hasPopover, disabled, readOnly, state } = useComboboxContext()

    const [PopoverAnchor, popoverAnchorProps] = hasPopover
      ? [Popover.Anchor, { asChild: true, type: undefined }]
      : [Fragment, {}]

    return (
      <>
        <PopoverAnchor {...popoverAnchorProps}>
          <div ref={forwardedRef} className={styles({ className, state, disabled, readOnly })}>
            {/* 1 - Leading icon (optional) */}
            <LeadingIcon>
              <ArrowHorizontalDown />
            </LeadingIcon>

            {/* 2 - TODO - selected items (optional, multiple selection only) */}
            <p>[selected items chips (v2)]</p>

            {children}

            {/* 4 - Combobox clear button (optional) */}
            <p>[clear]</p>

            {/* 5 - Combobox disclosure button (optional, advised for autoComplete not autoSuggest) */}
            <IconButton
              intent="neutral"
              design="ghost"
              size="sm"
              {...getToggleButtonProps()}
              aria-label="Show popup"
            >
              <Icon>
                <Icon className="shrink-0" size="sm">
                  <ArrowHorizontalDown />
                </Icon>
              </Icon>
            </IconButton>
          </div>
        </PopoverAnchor>
      </>
    )
  }
)

Trigger.displayName = 'Combobox.Trigger'
