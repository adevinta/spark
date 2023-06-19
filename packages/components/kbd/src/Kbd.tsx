import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export type KbdProps = ComponentPropsWithoutRef<'div'>

export const Kbd = forwardRef<HTMLElement, PropsWithChildren<KbdProps>>(
  ({ className, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={[
          'border-sm border-b-md bg-neutral-container ps-md pe-md border-outline text-caption whitespace-nowrap rounded-sm font-mono font-bold leading-4',
          className,
        ].join(' ')}
        {...props}
      />
    )
  }
)
