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
    { 'aria-label': ariaLabel, className, placeholder: placeholderProp, ...props }: InputProps,
    forwardedRef: Ref<HTMLInputElement>
  ) => {
    const ctx = useComboboxContext()

    const placeholder =
      ctx.multiple && ctx.selectedItems.length
        ? ctx.selectedItems.map(i => i.text).join(', ')
        : placeholderProp

    useEffect(() => {
      // Sync input with combobox default value
      if (!ctx.multiple && ctx.selectedItem) {
        ctx.setInputValue(ctx.selectedItem.text)
      }
    }, [])

    const [PopoverTrigger, popoverTriggerProps] = ctx.hasPopover
      ? [Popover.Trigger, { asChild: true, type: undefined }]
      : [Fragment, {}]

    const { ref: downshiftRef, ...downshiftInputProps } = ctx.getInputProps({
      ...ctx.getDropdownProps(),
      onKeyDown: () => {
        ctx.setLastInteractionType('keyboard')
      },
    })

    const ref = useMergeRefs(forwardedRef, downshiftRef)

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
            ref={ref}
            type="text"
            placeholder={placeholder}
            disabled={ctx.disabled || ctx.readOnly}
            className={cx('text-ellipsis', className)}
            {...props}
            {...downshiftInputProps}
            value={ctx.inputValue}
          />
        </PopoverTrigger>
      </>
    )
  }
)

Input.displayName = 'Combobox.Input'
