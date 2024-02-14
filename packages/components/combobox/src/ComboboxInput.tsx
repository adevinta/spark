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
  value?: string
  onValueChange?: (value: string) => void
}

export const Input = forwardRef(
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
      getDropdownProps,
      getInputProps,
      getLabelProps,
      hasPopover,
      disabled,
      readOnly,
      inputValue,
      setInputValue,
      setIsInputControlled,
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

        <PopoverTrigger {...popoverTriggerProps}>
          <input
            data-spark-component="combobox-input"
            ref={ref}
            type="text"
            placeholder={placeholder}
            disabled={disabled || readOnly}
            className={cx('text-ellipsis', className)}
            {...props}
            {...downshiftInputProps}
            value={inputValue}
          />
        </PopoverTrigger>
      </>
    )
  }
)

Input.displayName = 'Combobox.Input'
