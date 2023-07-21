import { Icon, type IconProps } from '@spark-ui/icon'
import { cx } from 'class-variance-authority'

export type InputIconProps = IconProps

export const InputIcon = ({ className, intent, children, ...others }: InputIconProps) => {
  return (
    <Icon
      intent={intent}
      className={cx(
        className,
        'pointer-events-none absolute top-[calc(var(--sz-44)/2)] -translate-y-1/2',
        intent ? undefined : 'text-neutral peer-focus:text-outline-high'
      )}
      {...others}
    >
      {children}
    </Icon>
  )
}

InputIcon.displayName = 'InputGroup.Icon'
