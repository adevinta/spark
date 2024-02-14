/* eslint-disable complexity */
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { ArrowHorizontalDown } from '@spark-ui/icons/dist/icons/ArrowHorizontalDown'
import { Popover } from '@spark-ui/popover'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { ComponentPropsWithoutRef, forwardRef, Fragment, type Ref, useEffect } from 'react'

import { useComboboxContext } from './ComboboxContext'
import { LeadingIcon } from './ComboboxLeadingIcon'
import { styles } from './ComboboxTrigger.styles'

type InputPrimitiveProps = ComponentPropsWithoutRef<'input'>

interface InputProps extends InputPrimitiveProps {
  className?: string
  onValueChange?: (value: string) => void
}

export const Trigger = forwardRef(
  (
    {
      'aria-label': ariaLabel,
      className,
      value: valueProp,
      placeholder: placeholderProp,
      onValueChange,
      ...props
    }: InputProps,
    forwardedRef: Ref<HTMLInputElement>
  ) => {
    const {
      getToggleButtonProps,
      getDropdownProps,
      getInputProps,
      getLabelProps,
      hasPopover,
      disabled,
      readOnly,
      inputValue,
      setInputValue,
      setIsInputControlled,
      state,
      setLastInteractionType,
      setOnInputValueChange,
      multiple,
      selectedItem,
      selectedItems,
    } = useComboboxContext()

    const isControlled = valueProp != null
    const placeholder =
      multiple && selectedItems.length ? selectedItems.map(i => i.text).join(', ') : placeholderProp

    useEffect(() => {
      setIsInputControlled(isControlled)
      if (isControlled) {
        setInputValue(valueProp as string)
      }
    }, [isControlled, valueProp])

    useEffect(() => {
      // Make Downshift aware of `onValueChange` prop to dispatch it
      if (onValueChange) {
        setOnInputValueChange(() => onValueChange)
      }

      // Sync input with combobox default value
      if (!multiple && selectedItem && !isControlled) {
        setInputValue(selectedItem.text)
      }
    }, [])

    const [PopoverAnchor, popoverAnchorProps] = hasPopover
      ? [Popover.Anchor, { asChild: true, type: undefined }]
      : [Fragment, {}]

    const [PopoverTrigger, popoverTriggerProps] = hasPopover
      ? [Popover.Trigger, { asChild: true, type: undefined }]
      : [Fragment, {}]

    const { ref: downshiftRef, ...downshiftInputProps } = getInputProps({
      ...getDropdownProps(),
      onKeyDown: () => {
        setLastInteractionType('keyboard')
      },
    })

    const ref = useMergeRefs(forwardedRef, downshiftRef)

    return (
      <>
        {ariaLabel && (
          <VisuallyHidden>
            <label {...getLabelProps()}>{ariaLabel}</label>
          </VisuallyHidden>
        )}
        <PopoverAnchor {...popoverAnchorProps}>
          <div className={styles({ className, state, disabled, readOnly })}>
            {/* 1 - Leading icon (optional) */}
            <LeadingIcon>
              <ArrowHorizontalDown />
            </LeadingIcon>

            {/* 2 - TODO - selected items (optional, multiple selection only) */}
            <p>[selected items chips (v2)]</p>

            {/* 3 - Input typing area  - MANDATORY */}
            <PopoverTrigger {...popoverTriggerProps}>
              <input
                data-spark-component="combobox-input"
                ref={ref}
                type="text"
                placeholder={placeholder}
                disabled={disabled || readOnly}
                className="text-ellipsis"
                {...props}
                {...downshiftInputProps}
                value={inputValue}
              />
            </PopoverTrigger>

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
