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
      disabled: ctx.disabled || ctx.readOnly,
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
            className={cx(
              'h-sz-28 shrink-0 flex-grow basis-[80px] text-ellipsis px-sm outline-none',
              'disabled:cursor-not-allowed disabled:bg-transparent disabled:text-on-surface/dim-3',
              'read-only:cursor-default read-only:bg-transparent read-only:text-on-surface',
              className
            )}
            {...props}
            {...downshiftInputProps}
            value={ctx.inputValue}
            aria-label={ariaLabel}
            disabled={ctx.disabled}
            readOnly={ctx.readOnly}
          />
        </PopoverTrigger>
      </>
    )
  }
)

Input.displayName = 'Combobox.Input'
