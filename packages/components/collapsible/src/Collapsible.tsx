import { Slot } from '@spark-ui/slot'
import * as collapsible from '@zag-js/collapsible'
import { mergeProps, normalizeProps, type PropTypes, useMachine } from '@zag-js/react'
import {
  type ComponentPropsWithoutRef,
  createContext,
  forwardRef,
  type ReactNode,
  useContext,
  useId,
  useMemo,
} from 'react'

export interface CollapsibleProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean
  children: ReactNode
  className?: string
  /**
   * The open state of the collapsible when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean
  /**
   * When `true`, prevents the user from interacting with the collapsible.
   */
  disabled?: boolean
  id?: string
  /**
   * Event handler called when the open state of the collapsible changes.
   */
  onOpenChange?: (open: boolean) => void
  /**
   * The controlled open state of the collapsible. Must be used in conjunction with `onOpenChange`.
   */
  open?: boolean
}

const CollapsibleContext = createContext<collapsible.Api<PropTypes> | null>(null)

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  ({
    asChild = false,
    children,
    defaultOpen = false,
    disabled = false,
    onOpenChange,
    open,
    ...props
  }) => {
    const initialContext: collapsible.Context = {
      'open.controlled': open !== undefined,
      open: defaultOpen || open,
      disabled,
      id: useId(),
      onOpenChange(details) {
        onOpenChange?.(details.open)
      },
    }

    const context: collapsible.Context = {
      ...initialContext,
      open,
      disabled,
    }

    const [state, send] = useMachine(collapsible.machine(initialContext), { context })

    const api = useMemo(() => collapsible.connect(state, send, normalizeProps), [send, state])

    const Component = asChild ? Slot : 'div'

    return (
      <CollapsibleContext.Provider value={api}>
        <Component data-spark-component="collapsible" {...mergeProps(api.rootProps, props)}>
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
