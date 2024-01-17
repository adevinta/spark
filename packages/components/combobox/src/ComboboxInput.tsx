// import { Icon } from '@spark-ui/icon'
// import { ArrowHorizontalDown } from '@spark-ui/icons/dist/icons/ArrowHorizontalDown'
import { Input as SparkInput, type InputProps as SparkInputProps } from '@spark-ui/input'
import { Popover } from '@spark-ui/popover'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { forwardRef, Fragment, ReactNode, type Ref } from 'react'

import { useComboboxContext } from './ComboboxContext'
// import { styles } from './ComboboxInput.styles'
// import { ComboboxStateIndicator } from './ComboboxStateIndicator'

interface InputProps extends SparkInputProps {
  'aria-label'?: string
  children: ReactNode
  className?: string
}

export const Input = forwardRef(
  (
    {
      'aria-label': ariaLabel,
      // children, className,
      ...props
    }: InputProps,
    forwardedRef: Ref<HTMLInputElement>
  ) => {
    const {
      // getToggleButtonProps,
      getDropdownProps,
      getInputProps,
      getLabelProps,
      hasPopover,
      disabled,
      readOnly,
      // state,
      setLastInteractionType,
    } = useComboboxContext()

    const [WrapperComponent, wrapperProps] = hasPopover
      ? [Popover.Trigger, { asChild: true }]
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
        <WrapperComponent {...wrapperProps}>
          <div>
            <SparkInput
              data-spark-component="combobox-input"
              placeholder="Best book ever"
              ref={ref}
              disabled={disabled || readOnly}
              {...downshiftInputProps}
              {...props}
            />
            {/* <button
              type="button"
              className={styles({ className, state, disabled, readOnly })}
              {...getToggleButtonProps()}
              
            >
              <span className="flex items-center justify-start gap-md">{children}</span>

              <div className="ml-md flex gap-lg">
                <ComboboxStateIndicator />
                <Icon className="shrink-0" size="sm">
                  <ArrowHorizontalDown />
                </Icon>
              </div>
            </button> */}
          </div>
        </WrapperComponent>
      </>
    )
  }
)

Input.displayName = 'Combobox.Input'
