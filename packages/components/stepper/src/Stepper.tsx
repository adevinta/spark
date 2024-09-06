import { useButton } from '@react-aria/button'
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { Minus } from '@spark-ui/icons/dist/icons/Minus'
import { Plus } from '@spark-ui/icons/dist/icons/Plus'
import { Input, InputGroup } from '@spark-ui/input'
import { forwardRef, PropsWithChildren, useRef } from 'react'

import { useStepper, type UseStepperArgs } from './useStepper'

export interface StepperProps
  extends Omit<UseStepperArgs, 'inputRef' | 'validationState' | 'incrementAriaLabel'> {
  /**
   * The [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code for the locale.
   * @default 'fr'
   */
  locale?: string
  /**
   * A custom aria-label for the increment button.
   */
  incrementAriaLabel: string
  /**
   * A custom aria-label for the decrement button.
   */
  decrementAriaLabel: string
}

export const Stepper = forwardRef<HTMLDivElement, PropsWithChildren<StepperProps>>((props, ref) => {
  const inputRef = useRef(null)
  const incBtnRef = useRef(null)
  const decBtnRef = useRef(null)

  const { labelProps, groupProps, inputProps, incrementButtonProps, decrementButtonProps } =
    useStepper({ ...props, inputRef })

  // Replace by compound with dedicated StepperButton!
  const { buttonProps: incButtonProps } = useButton(incrementButtonProps, incBtnRef)
  const { buttonProps: decButtonProps } = useButton(decrementButtonProps, decBtnRef)

  return (
    <div ref={ref}>
      <label {...labelProps}>{props.label}</label>

      <InputGroup {...groupProps}>
        <InputGroup.LeadingAddon asChild>
          <IconButton
            design="ghost"
            intent="neutral"
            ref={decBtnRef}
            {...decButtonProps}
            // aria-label="caca"
          >
            <Icon>
              <Minus />
            </Icon>
          </IconButton>
        </InputGroup.LeadingAddon>

        <Input {...inputProps} ref={inputRef} />

        <InputGroup.TrailingAddon asChild>
          <IconButton
            design="ghost"
            intent="neutral"
            ref={incBtnRef}
            {...incButtonProps}
            aria-label="caca"
          >
            <Icon>
              <Plus />
            </Icon>
          </IconButton>
        </InputGroup.TrailingAddon>
      </InputGroup>
    </div>
  )
})
