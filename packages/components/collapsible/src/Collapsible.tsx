import { Slot } from '@spark-ui/slot'
import * as collapsible from '@zag-js/collapsible'
import { mergeProps, normalizeProps, type PropTypes, useMachine } from '@zag-js/react'
import { type ComponentPropsWithoutRef, createContext, forwardRef, useContext, useId } from 'react'

export interface CollapsibleProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean
  /**
   * The open state of the collapsible when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean
  /**
   * When `true`, prevents the user from interacting with the collapsible.
   */
  disabled?: boolean
  /**
   * Event handler called when the open state of the collapsible changes.
   */
  onOpenChange?: (open: boolean) => void
  /**
   * The controlled open state of the collapsible. Must be used in conjunction with `onOpenChange`.
   */
  open?: boolean
  /**
   * The ids of the elements in the collapsible. Useful for composition
   */
  ids?: collapsible.Context['ids']
}

const CollapsibleContext = createContext<collapsible.Api<PropTypes> | null>(null)

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  (
    {
      asChild = false,
      children,
      defaultOpen = false,
      disabled = false,
      onOpenChange,
      open,
      ids,
      ...props
    },
    ref
  ) => {
    const initialContext: collapsible.Context = {
      'open.controlled': open !== undefined,
      open: defaultOpen || open,
      disabled,
      id: useId(),
      ids,
    }

    const context: collapsible.Context = {
      ...initialContext,
      onOpenChange(details) {
        onOpenChange?.(details.open)
      },
      open,
      disabled,
    }

    const [state, send] = useMachine(collapsible.machine(initialContext), { context })

    const api = collapsible.connect(state, send, normalizeProps)

    const Component = asChild ? Slot : 'div'

    const mergedProps = mergeProps(api.getRootProps(), props)

    return (
      <CollapsibleContext.Provider value={api}>
        <Component data-spark-component="collapsible" ref={ref} {...mergedProps}>
          {children}
        </Component>
      </CollapsibleContext.Provider>
    )
  }
)

Collapsible.displayName = 'Collapsible'

export const useCollapsibleContext = () => {
  const context = useContext(CollapsibleContext)

  if (!context) {
    throw Error('useCollapsibleContext must be used within a Collapsible provider')
  }

  return context
}
