import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export type KbdProps = ComponentPropsWithoutRef<'div'>

export const Kbd = forwardRef<HTMLElement, PropsWithChildren<KbdProps>>(
  ({ className, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={[
          'whitespace-nowrap rounded-sm border-sm border-b-md border-outline bg-neutral-container pe-md ps-md font-mono text-caption font-bold leading-4',
          className,
        ].join(' ')}
        {...props}
      />
    )
  }
)
