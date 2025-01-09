import { useEvent } from '@spark-ui/internal-utils'
import { Slot } from '@spark-ui/slot'
import * as accordion from '@zag-js/accordion'
import { mergeProps, normalizeProps, type PropTypes, useMachine } from '@zag-js/react'
import { cx } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, createContext, RefObject, useContext, useId } from 'react'

type ExtentedZagInterface = Omit<
  accordion.Context,
  'id' | 'ids' | 'orientation' | 'getRootNode' | 'onValueChange'
> &
  Omit<ComponentPropsWithoutRef<'div'>, 'defaultChecked'>

export interface AccordionProps extends ExtentedZagInterface {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean
  /**
   * Whether an accordion item can be closed after it has been expanded.
   */
  collapsible?: boolean
  defaultValue?: accordion.Context['value']
  /**
   * Whether the accordion items are disabled
   */
  disabled?: boolean
  /**
   * Whether multiple accordion items can be expanded at the same time.
   */
  multiple?: boolean
  /**
   * The `value` of the accordion items that are currently being expanded.
   */
  value?: string[]
  /**
   * The callback fired when the state of expanded/collapsed accordion items changes.
   */
  onValueChange?: (value: string[]) => void
  design?: 'filled' | 'outlined'
  ref?: RefObject<HTMLDivElement>
}

const AccordionContext = createContext<
  | (accordion.Api<PropTypes> & {
      design: 'filled' | 'outlined'
    })
  | null
>(null)

export const Accordion = ({
  asChild = false,
  children,
  collapsible = true,
  className,
  defaultValue,
  design = 'outlined',
  disabled = false,
  multiple = false,
  value,
  onValueChange,
  ref,
  ...props
}: AccordionProps) => {
  const [machineProps, localProps] = accordion.splitProps({
    children,
    multiple,
    collapsible,
    value,
    disabled,
    // onValueChange,
    className: cx('bg-surface rounded-lg h-fit', className),
    ...props,
  })

  const [state, send] = useMachine(
    // Initial state
    accordion.machine({
      ...machineProps,
      value: defaultValue,
      id: useId(),
      onValueChange(details) {
        onValueChange?.(details.value)
      },
    }),
    // Dynamic state
    {
      context: {
        ...machineProps,
        onValueChange: useEvent((details: accordion.ValueChangeDetails) => {
          onValueChange?.(details.value)
        }),
      },
    }
  )

  const Component = asChild ? Slot : 'div'
  const api = accordion.connect(state, send, normalizeProps)
  const mergedProps = mergeProps(api.getRootProps(), localProps)

  return (
    <AccordionContext.Provider value={{ ...api, design }}>
      <Component data-spark-component="accordion" ref={ref} {...mergedProps}>
        {children}
      </Component>
    </AccordionContext.Provider>
  )
}

Accordion.displayName = 'Accordion'

export const useAccordionContext = () => {
  const context = useContext(AccordionContext)

  if (!context) {
    throw Error('useAccordionContext must be used within a Accordion provider')
  }

  return context
}
