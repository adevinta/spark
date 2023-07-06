import { Icon, type IconProps } from '@spark-ui/icon'
import { cx } from 'class-variance-authority'

export type InputTrailingIconProps = IconProps

export const InputTrailingIcon = ({ className, intent, ...others }: InputTrailingIconProps) => (
  <Icon
    intent={intent}
    className={cx(
      className,
      'pointer-events-none',
      intent ? undefined : 'text-neutral peer-focus:text-outline-high'
    )}
    {...others}
  />
)

InputTrailingIcon.displayName = 'InputGroup.TrailingIcon'
