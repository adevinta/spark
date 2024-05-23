import { Popover } from '@spark-ui/popover'
import { useCombinedState } from '@spark-ui/use-combined-state'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, Fragment, type Ref, useEffect } from 'react'

import { useComboboxContext } from './ComboboxContext'

type InputPrimitiveProps = ComponentPropsWithoutRef<'input'>

interface InputProps extends Omit<InputPrimitiveProps, 'value' | 'placeholder'> {
  className?: string
  placeholder?: string
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export const Input = forwardRef(
  (
    {
      'aria-label': ariaLabel,
      className,
      placeholder,
      value,
      defaultValue,
      onValueChange,
      ...props
    }: InputProps,
    forwardedRef: Ref<HTMLInputElement>
  ) => {
    const ctx = useComboboxContext()
    const [inputValue] = useCombinedState(value, defaultValue)

    useEffect(() => {
      if (inputValue != null) {
        ctx.setInputValue(inputValue)
      }
    }, [inputValue])

    useEffect(() => {
      if (onValueChange) {
        ctx.setOnInputValueChange(() => onValueChange)
      }

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
      /**
       *
       * Important:
       * - without this, the input cursor is moved to the end after every change.
       * @see https://github.com/downshift-js/downshift/issues/1108#issuecomment-674180157
       */
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        ctx.setInputValue(e.target.value)
      },
      ref: inputRef,
    })

    const hasPlaceholder = ctx.multiple ? ctx.selectedItems.length === 0 : ctx.selectedItem === null

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
            {...(hasPlaceholder && { placeholder })}
            className={cx(
              'max-w-full shrink-0 grow basis-[80px]',
              'h-sz-28 text-ellipsis bg-surface px-sm text-body-1 outline-none',
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
