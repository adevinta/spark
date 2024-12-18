import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export type VisuallyHiddenProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const VisuallyHidden = forwardRef<HTMLElement, VisuallyHiddenProps>((props, ref) => {
  return (
    <span
      {...props}
      ref={ref}
      style={{
        // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
        position: 'absolute',
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
        ...props.style,
      }}
    />
  )
})

VisuallyHidden.displayName = 'VisuallyHidden'
