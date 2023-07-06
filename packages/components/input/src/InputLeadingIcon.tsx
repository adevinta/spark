import { Icon, type IconProps } from '@spark-ui/icon'
import { cx } from 'class-variance-authority'

export type InputLeadingIconProps = IconProps

export const InputLeadingIcon = ({ className, intent, ...others }: InputLeadingIconProps) => (
  <Icon
    className={cx(
      className,
      'pointer-events-none absolute top-1/2 -translate-y-1/2 left-lg',
      intent ? undefined : 'text-neutral peer-focus:text-outline-high'
    )}
    {...others}
  />
)

InputLeadingIcon.displayName = 'InputGroup.LeadingIcon'
