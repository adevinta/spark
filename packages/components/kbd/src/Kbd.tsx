import { ComponentPropsWithoutRef, PropsWithChildren, RefObject } from 'react'

export type KbdProps = ComponentPropsWithoutRef<'div'> & {
  ref?: RefObject<HTMLElement>
}

export const Kbd = ({ className, ref, ...props }: PropsWithChildren<KbdProps>) => {
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
