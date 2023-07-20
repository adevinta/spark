import { Icon, type IconProps } from '@spark-ui/icon'
import { cx } from 'class-variance-authority'

import { useInputGroup } from './InputGroupContext'

export type InputIconProps = IconProps

export const InputIcon = ({ className, intent, children, ...others }: InputIconProps) => {
  const { disabled } = useInputGroup()

  return (
    <Icon
      intent={intent}
      className={cx(
        className,
        'pointer-events-none absolute top-1/2 -translate-y-1/2',
        intent ? undefined : 'text-neutral peer-focus:text-outline-high',
        disabled ? 'opacity-dim-3' : undefined
      )}
      {...others}
    >
      {children}
    </Icon>
  )
}

InputIcon.displayName = 'InputIcon'
