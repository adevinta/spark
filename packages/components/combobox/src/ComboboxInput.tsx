import { Popover } from '@spark-ui/popover'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, Fragment, type Ref, useEffect } from 'react'

import { useComboboxContext } from './ComboboxContext'

type InputPrimitiveProps = ComponentPropsWithoutRef<'input'>

interface InputProps extends Omit<InputPrimitiveProps, 'value' | 'placeholder'> {
  className?: string
  placeholder?: string
}

export const Input = forwardRef(
  (
    { 'aria-label': ariaLabel, className, placeholder, ...props }: InputProps,
    forwardedRef: Ref<HTMLInputElement>
  ) => {
    const ctx = useComboboxContext()

    useEffect(() => {
      // Sync input with combobox default value
      if (!ctx.multiple && ctx.selectedItem) {
        ctx.setInputValue(ctx.selectedItem.text)
      }
    }, [])

    const [PopoverTrigger, popoverTriggerProps] = ctx.hasPopover
      ? [Popover.Trigger, { asChild: true, type: undefined }]
      : [Fragment, {}]

    const multiselectInputProps = ctx.getDropdownProps()
    const inputRef = useMergeRefs(forwardedRef, ctx.innerInputRef, multiselectInputProps.ref)
    const downshiftInputProps = ctx.getInputProps({
      ...multiselectInputProps,
      onKeyDown: event => {
        multiselectInputProps.onKeyDown?.(event)
        ctx.setLastInteractionType('keyboard')
      },
      ref: inputRef,
    })

    return (
      <>
        {ariaLabel && (
          <VisuallyHidden>
            <label {...ctx.getLabelProps()}>{ariaLabel}</label>
          </VisuallyHidden>
        )}
        <PopoverTrigger {...popoverTriggerProps}>
          <input
            data-spark-component="combobox-input"
            type="text"
            placeholder={placeholder}
            disabled={ctx.disabled || ctx.readOnly}
            className={cx(
              'shrink-0 flex-grow basis-[80px] text-ellipsis px-sm outline-none',
              className
            )}
            {...props}
            {...downshiftInputProps}
            value={ctx.inputValue}
            aria-label={ariaLabel}
          />
        </PopoverTrigger>
      </>
    )
  }
)

Input.displayName = 'Combobox.Input'
